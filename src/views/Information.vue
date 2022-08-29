<template>
  <div class="informationContainer">
    <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/home">合作共赢</router-link></li>
      <li><router-link to="/home">关于我们</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Information",
  beforeRouteEnter(to, from, next) {
    console.log(1);
    next((vm) => {
      vm.$store.commit("hidden");
    });
  },
  beforeDestroy() {
    this.$store.commit("show");
  },
};
</script>

<style scoped>
.informationContainer {
  margin: 75px;
}
</style>