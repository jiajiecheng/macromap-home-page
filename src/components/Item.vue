<template>
  <div class="itemContainer" :style="{flexDirection:direction}">
    <div class="introduceContent">
      <h1>{{introduce.title}}</h1>
      <p>{{introduce.content}}</p>
    </div>
    <div class="introduceImg"><img :src="introduce.imgurl" :alt="introduce.title"></div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props:['introduce','direction']
}
</script>

<style scoped>

.itemContainer {
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