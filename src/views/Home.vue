<template>
  <div class="homeContainer">
    <Download/>
  </div>
</template>

<script>
import Download from '@/components/Download.vue';
export default {
    name: "Home",
    components: { Download }
}
</script>

<style scoped>
.homeContainer{
  margin-top: 75px;
}

</style>