<template>
  <div class="homeContainer">
    <Download/>
    <Qrcode/>
    <GridList/>
    <Slides/>
    <IntroduceList/>
    <Time/>
    <Customer/>
    <div class="end">
      <h1>更多内容，等你来发现！</h1>
    </div>
  </div>
</template>

<script>
import Download from '@/components/Download.vue';
import Qrcode from '@/components/Qrcode.vue';
import IntroduceList from '@/components/List.vue';
import GridList from '@/components/Grid.vue';
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
.end{
  padding: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.end h1{
  color: #000;
  font-size: 34px;
  font-weight: 700;
}
</style>