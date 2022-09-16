<template>
  <div class="about">
    <div class="context">
      <h1 class="title">关于我们</h1>
      <div v-html="aboutWe" class="paragraph"></div>
    </div>
    <Qrcode/>
  </div>
</template>

<script>
import Qrcode from '@/components/Qrcode.vue';
import Bottom from '@/components/Bottom.vue';
import Copyright from '@/components/Copyright.vue';
export default {
    name: "About",
    components: { Qrcode, Bottom, Copyright },
    data() {
      return {
        aboutWe:`【吃1顿】是郑州阿提树网络科技有限公司旗下退出的餐饮智能管理系统品牌。
        团队成员有用5年以上的系统开发经验。我们很小，所以更愿意听取多方的意见；
        我们以商家企业为主要服务对象，所以我们愿意为所有用户提供优质的软件服务；我们尊重每一位商家企业，
        所以我们愿意为每一位独一无二的商家企业提供个性化服务。<br>
        <p style="line-height: 40px;">经过新冠肺炎疫情之后，我们对众多的餐饮行业从业者感同身受，愿意与餐饮行业从业者并肩前行、携手共进。所以我们的软件基础服务永久免费！<br>
        我们希望，能够帮助小商家实现数智化的运营店铺，帮助所有商家提高经营效率，低成本实现数据可视化，对症下药经营。<br> 
        我们的使命：帮助餐饮行业完成数智化转型！<br>
        我们的愿景：成为餐饮行业从业者的朋友<br>
        </p>`
      }
    },
}
</script>

<style scoped>
.about{
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  justify-content: center;
  align-items: center;
}
.context{
  padding: 100px 0;
  width: 1070px;
  display: flex;
  flex-direction: column;
}
.context .title{
  font-size: 32px;
}
.context .paragraph{
  color: #999;
  font-size: 16px;
  line-height: 25px;
}
</style>