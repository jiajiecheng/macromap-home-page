<template>
  <div id="app">
    <Top />
    <Bottom />
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Bottom from './components/Bottom.vue'
export default {
  name: 'App',
  components: { Top, Bottom }
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
li{
  list-style: none;
}
</style>
