<template>
  <div class="homeContainer">
    <Download/>
    <Qrcode/>
    <GridList/>
    <Slides/>
    <IntroduceList/>
    <Time/>
  </div>
</template>

<script>
import Download from '@/components/Download.vue';
import Qrcode from '@/components/Qrcode.vue';
import IntroduceList from '@/components/IntroduceList.vue';
import GridList from '@/components/GridList.vue';
import Slides from '@/components/Slides.vue';
import Time from '@/components/Time.vue';
export default {
    name: "Home",
    components: { Download, Qrcode, IntroduceList, GridList, Slides, Time }
}
</script>

<style scoped>
.homeContainer{
  margin-top: 75px;
}

</style>