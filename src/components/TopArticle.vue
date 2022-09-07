<template>
  <div class="TopArticleContainer">
    <img :src="imgUrl" alt="">
    <div class="content">
      <span>{{label}}</span>
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopArticle',
  props: ['imgUrl','label','title']
}
</script>

<style scoped>
.TopArticleContainer {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 230px;
  margin-bottom: 10px;
}
.TopArticleContainer img {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  bottom: 0;
  position: absolute;
}
.content span {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px;
  font-size: 12px;
}
.content span,
.content h1 {
  margin-left: 10px;
}
.content h1 {
  color: #fff;
  font-size: 20px;
}
</style>