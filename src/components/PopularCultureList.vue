<template>
  <div>
    <ul v-for="(item,index) in hotList" :key="index">
      <li class="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PopularCultureList',
  data() {
    return {
      hotList: ['0基础创业，免费成为合伙人！', '0基础创业，免费成为合伙人！', '0基础创业，免费成为合伙人！', '0基础创业，免费成为合伙人！']
    }
  }
}
</script>

<style scoped>
.item {
  cursor: default;
  padding-bottom: 10px;
  font-size: 14px;
  color: #727272;
}
.item:hover {
  text-decoration: underline;
}
</style>