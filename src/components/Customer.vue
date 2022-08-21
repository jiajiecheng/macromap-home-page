<template>
  <div class="customer">
    <Title title="客户案例" abstract="OUR CUSTOMERS" />
    <ul class="list">
      <i class="item" v-for="(item,index) in 10" :key="index"><img src="http://www.supermenus.cn/assets/coperation/2.jpg" alt=""></i>
    </ul>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
export default {
  name: 'Customer',
  components: { Title }
}
</script>

<style scoped>
.customer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;
  background-color: #f3f7fd;
}
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  width: 280px;
  height: 210px;
  /* background-color: pink; */
  margin: 10px;
}
.item img {
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  box-shadow: 0 0 20px #fff;
}
.item img:hover {
  border: 2px solid #b0d2f5;
   box-shadow: 0 0 20px #b0d2f5;
}
</style>