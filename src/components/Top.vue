<template>
  <div class="topContainer">
    <div class="title">
      <img src="../assets/logo.png" alt="logo" class="logo">
      <ul class="navigation">
        <li>
          <router-link to="" active-class="selectLink" active>主页</router-link>
        </li>
        <li>
          <router-link to="">产品介绍</router-link>
        </li>
        <li>
          <router-link to="">招商中心</router-link>
        </li>
        <li>
          <router-link to="">下载中心</router-link>
        </li>
        <li>
          <router-link to="">资讯中心</router-link>
        </li>
        <li>
          <router-link to="">加入我们</router-link>
        </li>
        <li>
          <router-link to="">关于我们</router-link>
        </li>
        <li>
          <button class="freeUse">立即免费使用</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
.topContainer {
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #fff;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 8px -10px #333;
}
.title {
  width: 1400px;
  height: 38px;
  /* background: skyblue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 120px;
}
.navigation {
  display: flex;
  align-items: center;
}
.navigation li {
  padding: 0 12px;
}
.navigation li a:hover,
.selectLink {
  color: #409eff;
  cursor: default;
}
.freeUse{
  background-color: #fff;
  width: 126px;
  height: 32px;
  font-weight: 900;
  line-height: 26px;
  border: 2px solid #409eff;
  border-radius: 100px;
  color: #409eff;
}
.freeUse:hover{
  background-color: #409eff;
  color: #fff;
}
</style>