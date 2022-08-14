<template>
  <div class="introduceList">
    <ul>
      <li v-for="(introduce,index) in introduceList" :key="index">
        <div class="introduceContent">
          <h1>{{introduce.title}}</h1>
          <p>{{introduce.content}}</p>
        </div>
        <div class="introduceImg"><img :src="introduce.imgurl" :alt="introduce.title"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IntroduceList',
  data() {
    return {
      introduceList: [
        {
          title: '全餐饮行业支持',
          content: '更加灵活的产品设计，为餐饮行业提供更贴切需求的解决方案。西餐、中餐、火锅、烧烤、快餐、海鲜、小吃...更多行业等你加入',
          imgurl: 'http://www.chi1dun.com/static/images/index3.png'
        },
        {
          title: '从实体到线上，轻松"上纲上线"',
          content: '微信公众号、微信小程序、支付宝体系各种渠道自由组合，实现您自己的系统！',
          imgurl: 'http://www.chi1dun.com/static/images/index4.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.introduceList,
ul {
  width: 100%;
}
.introduceList ul li:nth-child(odd) {
  flex-direction: row;
  background-color: #fff;
}
.introduceList ul li:nth-child(even) {
  flex-direction: row-reverse;
  background-color: #f3f7fd;
}
.introduceList ul li {
  width: 100%;
  height: 612px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introduceContent,
.introduceImg {
  width: 570px;
  height: 360px;
  padding: 0 15px;
}
.introduceImg img {
  width: 100%;
}
.introduceContent h1 {
  font-size: 38px;
}
.introduceContent p {
  font-size: 18px;
  color: #999;
}
</style>