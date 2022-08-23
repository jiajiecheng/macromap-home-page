<template>
  <div class="titleContainer">
    <h1>{{title}}</h1>
    <p>{{abstract}}</p>
    <slot name="context"></slot>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['title', 'abstract']
}
</script>

<style scoped>
.titleContainer {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titleContainer h1 {
  font-size: 34px;
  color: #000;
  margin: 0 0 8px 0;
}
.titleContainer p {
  font-size: 16px;
  color: #999;
  margin: 0 0 30px 0;
}
</style>