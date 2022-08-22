<template>
  <div class="gridListContainer">
    <h1 class="title">{{title}}</h1>
    <div class="grid">
      <div class="item" v-for="(item,index) in gridList" :key="index">
        <img :src="item.imgSrc" :alt="item.title">
        <h1>{{item.title}}</h1>
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridList',
  data() {
    return {
      title: '宏图电子菜单特性',
      gridList: [
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-1.png',
          title: '个性化',
          content: '界面自由设计,流程自由定制。'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-2.png',
          title: '酷炫',
          content: '图片/视频/动画/音效,多媒体自由组合。'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-3.png',
          title: '体验',
          content: '给顾客极致体验,在体验中静默营销。'
        }
      ]
    }
  }
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