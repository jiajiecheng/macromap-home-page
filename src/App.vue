<template>
  <div id="app">
    <Top />
    <router-view></router-view>
    <Bottom />
    <Copyright/>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Bottom from './components/Bottom.vue'
import Copyright from './components/Copyright.vue';
export default {
  name: 'App',
  components: { Top, Bottom, Copyright }
}
</script>

<style>
a {
  text-decoration: none;
  font-weight: 700;
  color: #333;
}
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
li,ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
