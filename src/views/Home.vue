<template>
  <div class="homeContainer">
    <Download />
    <Qrcode />
    <Grid :title="title" :list="gridList" />
    <Slides />
    <IntroduceList />
    <Time />
    <Customer />
    <div class="end">
      <h1>更多内容，等你来发现！</h1>
    </div>
  </div>
</template>

<script>
import Download from '@/components/Download.vue'
import Qrcode from '@/components/Qrcode.vue'
import IntroduceList from '@/components/List.vue'
import Grid from '@/components/Grid.vue'
import Slides from '@/components/Slides.vue'
import Time from '@/components/Time.vue'
import Customer from '@/components/Customer.vue'
export default {
  name: 'Home',
  components: { Download, Qrcode, IntroduceList, Grid, Slides, Time, Customer },
  data() {
    return {
       title: '宏图电子菜单特性',
      gridList: [
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-1.png',
          title: '个性化',
          content: '界面自由设计,流程自由定制。'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-2.png',
          title: '酷炫',
          content: '图片/视频/动画/音效,多媒体自由组合。'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-3.png',
          title: '体验',
          content: '给顾客极致体验,在体验中静默营销。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.homeContainer {
  margin-top: 75px;
}
.end {
  padding: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.end h1 {
  color: #000;
  font-size: 34px;
  font-weight: 700;
}
</style>