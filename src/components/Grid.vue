<template>
  <div class="gridListContainer">
    <h1 class="title">{{title}}</h1>
    <div class="grid">
      <div class="item" v-for="(item,index) in list" :key="index">
        <img :src="item.imgSrc" :alt="item.title" :style="{width:imgWidth}">
        <h1>{{item.title}}</h1>
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridList',
  props:['title','list','imgWidth']
}
</script>

<style scoped>
.gridListContainer {
  background-color: #fff;
  width: 100%;
  padding: 48px 0;
}
.title {
  text-align: center;
  margin: 0 auto;
  font-size: 34px;
  margin-bottom: 40px;
}
.grid {
  width: 1140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  flex-flow: wrap;
}
.item {
  width: 302px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 39px 36px 39px;
}
.item img {
  width: 200px;
}
.item h1,
.item p {
  margin: 10px 0;
}
.item h1 {
  font-size: 24px;
}
.item p {
  text-align: center;
  font-size: 16px;
  color: #999;
}
</style>