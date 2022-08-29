<template>
  <div class="informationContainer">
    <div class="header">
      <ul class="nav">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/home">合作共赢</router-link></li>
        <li><router-link to="/home">商店开启免费扫码点餐</router-link></li>
        <li><router-link to="/home">0成本创业，成为合伙人!</router-link></li>
        <li><router-link to="/home">智能餐饮系统</router-link></li>
        <li><router-link to="/home">关于我们</router-link></li>
      </ul>
    </div>
    <div class="banner">
      <div class="block">
        <el-carousel trigger="click" height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
           <img src="../assets/head-bg-scaled.jpg" alt="轮播图" style="width:100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Information",
  beforeRouteEnter(to, from, next) {
    console.log(1);
    next((vm) => {
      vm.$store.commit("hidden");
    });
  },
  beforeDestroy() {
    this.$store.commit("show");
  },
};
</script>

<style scoped>
.informationContainer {
  margin-top: 75px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner{
 padding: 0 40px;
}
.nav {
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.header .nav li {
  padding: 20px 30px 20px 0;
}
.header .nav li a{
  color: #333;
}
.header .nav li a:hover{
  color: #999;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

</style>