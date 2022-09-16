<template>
  <div class="cooperationCon">
    <div class="header">
      <div class="left">
        <div class="content">
          <h1 v-html="title"></h1>
          <p v-html="content"></p>
          <button>立即联系我们</button>
        </div>
      </div>
      <img src="http://www.chi1dun.com/static/images/cooperation.png" class="right">
    </div>
    <Grid title="我们的市场未来规模有多大？" :list="list" imgWidth="100px"/>
    <Qrcode/>
    <Form/>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Qrcode from '@/components/Qrcode.vue';
import Form from '@/components/Form.vue';
import Bottom from '@/components/Bottom.vue';
import Copyright from '@/components/Copyright.vue';
export default {
  name: 'Cooperation',
  data() {
    return {
      title: `合作双赢，共创辉煌<br>期待与您的合作`,
      content: `智能时代，颠覆传统，引领科学管理<br>欢迎有志之士与吃1顿携手共拓市场`,
      list: [
        {
          imgSrc: require('../assets/cabinet.png'),
          title: '企业众多',
          content: '全国有800万家企业和商家，其中90%没有使用任何工具进行科学化管理'
        },
        {
          imgSrc: require('../assets/user.png'),
          title: '用户量大',
          content: '我们帮助商家积累微信用户，而在全球有12亿人在使用微信'
        },
        {
          imgSrc: require('../assets/shop.png'),
          title: '强大的互联网思维',
          content: '线上线下，相辅相成，运营和成交事半功倍。'
        }
      ]
    }
  },
  components: { Grid, Qrcode, Form, Bottom, Copyright }
}
</script>

<style scoped>
.cooperationCon {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  margin: 80px 0;
  width: 940px;
  display: flex;
  flex-direction: row;
}
.header .right,
.header .left {
  width: 50%;
}
.header .left {
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.left .content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* background-color: skyblue; */
}
.left .content h1 {
  font-size: 25px;
  margin-bottom: 10px;
}
.left .content p {
  margin: 0 0 35px 0;
  font-size: 18px;
  color: #303133;
}
.left .content button {
  background-color: #409eff;
  width: 166px;
  height: 44px;
  font-weight: 900;
  line-height: 26px;
  border: 2px solid #409eff;
  border-radius: 100px;
  color: #fff;
}
.left .content button:hover {
  background-color: #fff;
  color: #409eff;
}
</style>