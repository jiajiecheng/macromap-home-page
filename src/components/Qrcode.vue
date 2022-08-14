<template>
  <div class="codeContaliner">
    <div class="content">
      <img src="../assets/qrcode_for_wxmp.jpg" alt="微信公众号">
      <p>关注微信公众号，关注更新</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'QrCode'

}
</script>

<style scoped>
.codeContaliner{
  width: 100%;
  height: 568px ;
  background-color: #f3f7fd;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 960px;
  height: 310px;
}
.content img{
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 10%);
  border-radius: 10px;
}
.content p{
  color:#999;
  font-size: 15px;
}
</style>