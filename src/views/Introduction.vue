<template>
  <div class="introductionContainer">
    <div class="banner">
      <div class="content">
        <Title title="宏图电子菜单" abstract="点餐、收银、预约、排队、会员、营销、销存"/>
      </div>
    </div>
    <div class="title">
      <Title title="我到底需不需要这套系统？" abstract="我们的系统旨在为所有餐饮从业者提供互联网软件服务，除非你清楚地知道你不需要，否则我们认为你都应该使用这套系统。" />
    </div>
    <GridList :list="gridList" :title="title"/>
    <div class="item">
      <Item :introduce="introduceList[0]" direction="row-reverse" />
    </div>
    <GridList :list="gridList" :title="title"/>
    <div class="item">
      <Item :introduce="introduceList[1]" direction="row" />
    </div>
    <div class="use">
      <Title title="我们承诺，永久免费！" abstract="立即行动，您距离数智化管理运营店铺，就差一步.">
        <template v-slot:context>
          <button class="freeUse">立即免费使用</button>
        </template>
      </Title>
    </div>
    <Qrcode />
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import GridList from '@/components/Grid.vue'
import IntroduceList from '@/components/List.vue'
import Qrcode from '@/components/Qrcode.vue'
import Item from '@/components/Item.vue'
export default {
  name: 'Introduction',
  components: { Title, GridList, IntroduceList, Qrcode, Item },
  data() {
    return {
      title: '丰富的菜单功能',
      introduceList: [
        {
          title: '功能强大且丰富',
          content: '持续的开发投入，不断的创新创造。也许现在功能没有你想要的，但是迟早都会有你想要的我们会持续在优化使用场景，提高运营效率，高效维护客户关系，科学分析数据上进行深入研究和开发，致力于服务各种场景各中类型企业和商户。',
          imgurl: 'http://www.chi1dun.com/static/images/fengfu.png'
        },
        {
          title: '丰富的工具供商家企业使用',
          content: '系统内丰富的营销工具，并且还在持续开发和创新中...开放的姿态希望与各个伙伴携手共进，共同发展。高效的数字报表、为提升顾客就餐体验的各种科技，我们也期待您的反馈与建议，让我们变得更好，也让您变得更好。',
          imgurl: 'http://www.chi1dun.com/static/images/xiaolv.png'
        }
      ],
      gridList: [
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-2.png',
          title: '商家代金券',
          content: '向顾客提供先购买后使用的代金券'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-2.png',
          title: '闲时折扣',
          content: '闲时折扣提升闲时段的顾客到店，优化每日经营的结构'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-3.png',
          title: '短信温馨回访',
          content: '短信赠券回访老客户，提升顾客亲密度，丰富顾客关怀'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-1.png',
          title: '优惠券',
          content: '独立优惠券，先领在用'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-2.png',
          title: '消费有礼',
          content: '满金额返优惠券，不做一锤子买卖'
        },
        {
          imgSrc: 'http://www.chi1dun.com/static/images/description-3.png',
          title: '更多营销工具',
          content: '更多的营销工具等你使用...'
        }
      ]
    }
  }
}
</script>
<style scoped>
.banner{
  background: #fff url(http://www.chi1dun.com/static/images/product-headbg.jpg) no-repeat bottom;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner .content{
  background-color: rgba(255, 240, 240, 0.8);
  padding: 40px 80px;
}
.introductionContainer {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
}
.title {
  background-color: #f3f7fd;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  background-color: #f3f7fd;
}
.use {
  background-color: #fff;
  padding: 70px 0;
}
.freeUse {
  background-color: #409eff;
  width: 166px;
  height: 48px;
  font-weight: 900;
  line-height: 26px;
  border: 2px solid #409eff;
  border-radius: 100px;
  color: #fff;
}
.freeUse:hover {
  background-color: #fff;
  color: #409eff;
}
</style>