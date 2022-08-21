<template>
  <div class="introductionContainer">
    <div class="title">
      <Title title="我到底需不需要这套系统？" abstract="我们的系统旨在为所有餐饮从业者提供互联网软件服务，除非你清楚地知道你不需要，否则我们认为你都应该使用这套系统。" />
    </div>
    <GridList/>
    <IntroduceList/>
    <Qrcode/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import GridList from '@/components/GridList.vue';
import IntroduceList from '@/components/IntroduceList.vue';
import Qrcode from '@/components/Qrcode.vue';
export default {
    name: "Introduction",
    components: { Title, GridList, IntroduceList, Qrcode }
}
</script>
<style scoped>
.introductionContainer{
  margin-top: 75px;
  display: flex;
  flex-direction: column;
}
.title{
  background-color: #f3f7fd;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>