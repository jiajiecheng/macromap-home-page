<template>
  <div class="downloadContainer">
    <div class="textContainer">
      <h1 class="title">宏图电子菜单 点餐系统</h1>
      <p class="large">安全、高效、便捷、定制</p>
      <button class="freeUse">立即免费使用</button>
    </div>
    <div class="imgFluid">
      <img src="../assets/show.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'Download'

}
</script>

<style scoped>
.downloadContainer{
  /* padding-top: 120px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.textContainer{
  width: 437px;
  height: 256px;
  /* background-color: pink; */
}
.imgFluid{
  width: 630px;
  height: 630px;
  /* background-color: skyblue; */
}
.imgFluid img{
  width: 100%;
}
.title{
  font-size: 50px;
  margin: 0 0 12px 0;
}
.large{
  color: #303133;
  margin: 0 0 28px 0;
  font-size: 18px;
  font-weight: 500;
}
.freeUse{
  width: 172px;
  height: 48px;
  background-color: #409eff;
  border-radius: 100px;
  border: 1px solid #409eff;
  color: #fff;
  font-weight: 600;
}
.freeUse:hover{
  background-color: #fff;
  color: #409eff;
}
</style>