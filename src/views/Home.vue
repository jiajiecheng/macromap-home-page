<template>
  <div class="homeContainer">
    <Download/>
    <Qrcode/>
    <GridList/>
    <IntroduceList/>
  </div>
</template>

<script>
import Download from '@/components/Download.vue';
import Qrcode from '@/components/Qrcode.vue';
import IntroduceList from '@/components/IntroduceList.vue';
import GridList from '@/components/GridList.vue';
export default {
    name: "Home",
    components: { Download, Qrcode, IntroduceList, GridList }
}
</script>

<style scoped>
.homeContainer{
  margin-top: 75px;
}

</style>