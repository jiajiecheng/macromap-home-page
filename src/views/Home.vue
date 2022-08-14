<template>
  <div class="homeContainer">
    <Download/>
    <Qrcode/>
    <IntroduceList/>
  </div>
</template>

<script>
import Download from '@/components/Download.vue';
import Qrcode from '@/components/Qrcode.vue';
import IntroduceList from '@/components/IntroduceList.vue';
export default {
    name: "Home",
    components: { Download, Qrcode, IntroduceList }
}
</script>

<style scoped>
.homeContainer{
  margin-top: 75px;
}

</style>