<template>
  <div class="copyrightContainer">
    <div class="copyrightInfo">Copyright © 长沙尘旭网络技术有限公司. All Rights Reserved. <a>豫ICP备2021015956号-1豫ICP备2021015956号-4</a></div>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style scoped>
.copyrightContainer {
  width: 100%;
  background-color: #404343;
  height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.copyrightInfo {
  border-top: 1px solid #484a4a;
  height: 84px;
  color: #9d9d9d;
  width: 70%;
  text-align: center;
  line-height: 84px;
}
.copyrightInfo a {
  font-weight: 400;
  text-decoration: underline;
  color: #9d9d9d;
}
</style>