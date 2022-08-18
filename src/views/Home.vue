<template>
  <div class="homeContainer">
    <Download/>
    <Qrcode/>
    <GridList/>
    <Slides/>
    <IntroduceList/>
  </div>
</template>

<script>
import Download from '@/components/Download.vue';
import Qrcode from '@/components/Qrcode.vue';
import IntroduceList from '@/components/IntroduceList.vue';
import GridList from '@/components/GridList.vue';
import Slides from '@/components/Slides.vue';
export default {
    name: "Home",
    components: { Download, Qrcode, IntroduceList, GridList, Slides }
}
</script>

<style scoped>
.homeContainer{
  margin-top: 75px;
}

</style>