<template>
  <div class="SearchArticleContainer">
    <div class="search">
      <input type="text" v-model="search" placeholder="请输入搜索的文章标题">
      <button type="submit"><i class="el-icon-search"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchArticle',
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
.SearchArticleContainer {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.search {
  display: flex;
}
.search input {
  padding: 6px;
  flex: 1;
  border-radius: 0;
  border: 2px solid #409eff;
}
.search input[type='text']:focus {
  border-radius: 0;
  border: 2px solid #409eff;
}
.search button {
  color: #fff;
  background-color: #409eff;
  width: 55px;
  height: 40px;
  border: 0;
  border-radius: 0;
}
</style>