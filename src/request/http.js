import axios from 'axios';
import QS from 'qs';
import store from '@/store/index';
import { Message } from 'element-ui'
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://192.168.123.63:8081/chiyidun/public/api';
}
else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'http://192.168.123.63:8081/chiyidun/public/api';
}
else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://192.168.123.63:8081/chiyidun/public/api';
}
axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
    // 否则的话抛出错误
   
    if (response.status >= 200 && response.status <= 300) {
      console.log(response);
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展

  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 404请求不存在
        case 404:
          Message({
            type: 'error',
            message: '网络请求不存在',
          });
          break;
        // 其他错误，直接抛出错误提示
        case 429:
          Message({
            type: 'error',
            message: '访问速度过快,请稍后再试',
          });
          break;
        default:
          Message({
            type: 'error',
            message: error.response.data.message,
          });
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}