<template>
  <div class="homeContainer">
    <Download/>
    <Qrcode/>
    <GridList/>
    <Slides/>
    <IntroduceList/>
    <Time/>
    <Customer/>
  </div>
</template>

<script>
import Download from '@/components/Download.vue';
import Qrcode from '@/components/Qrcode.vue';
import IntroduceList from '@/components/IntroduceList.vue';
import GridList from '@/components/GridList.vue';
import Slides from '@/components/Slides.vue';
import Time from '@/components/Time.vue';
import Customer from '@/components/Customer.vue';
export default {
    name: "Home",
    components: { Download, Qrcode, IntroduceList, GridList, Slides, Time, Customer }
}
</script>

<style scoped>
.homeContainer{
  margin-top: 75px;
}

</style>