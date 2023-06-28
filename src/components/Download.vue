<template>
  <div class="downloadContainer">
    <div class="textContainer">
      <h1 class="title fontColor">MacroMap</h1>
      <h1 class="title">未来已来，让科技助力餐企大展鸿图</h1>
      <p class="large">宏图信息化餐饮系统</p>
      <button class="freeUse">立即免费使用</button>
    </div>
    <div class="imgFluid">
      <img src="../assets/logo_new.png" class="show">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Download'

}
</script>

<style scoped>
.fontColor {
  background-image: -webkit-linear-gradient(left, red, #ff9b4a, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.downloadContainer {
  /* padding-top: 120px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.textContainer {
  width: 437px;
  height: 256px;
  /* background-color: pink; */
}

.imgFluid {
  width: 630px;
  height: 630px;
  /* background-color: skyblue; */
}

.imgFluid img {
  /* height: 600px; */
  filter: drop-shadow(0px 0px 20px #ff9b4a);
  width: 100%;
}

.title {
  font-size: 50px;
  margin: 0 0 12px 0;
}

.large {
  color: #303133;
  margin: 0 0 28px 0;
  font-size: 18px;
  font-weight: 500;
}

.freeUse {
  width: 172px;
  height: 48px;
  background-color: #ff9b4a;
  border-radius: 100px;
  border: 1px solid #ff9b4a;
  color: #fff;
  font-weight: 600;
}

.freeUse:hover {
  background-color: #fff;
  color: #ff9b4a;
}
</style>