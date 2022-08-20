<template>
  <div class="slidesContainer">
    <Title abstract="电子菜单功能完善" title="宏图电子菜单基础功能" />
    <el-carousel :interval="4000" type="card" height="300px"  trigger="click">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="../assets/tab2.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Title from './Title.vue'
export default {
  name: 'Slides',
  components: { Title }
}
</script>

<style scoped>
.slidesContainer {
  box-sizing: border-box;
  padding: 50px 150px;
  background-color: #f3f7fd;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-carousel__item {
  background-color: #f3f7fd;
}
.el-carousel__item img {
  width: 100%;
}
</style>