<template>
  <div class="bottomContainer">
    <div class="productInfo">
      <h2 class="title">关于我们</h2>
      <span class="content">
        吃1顿是一个致力于为餐饮行业实体店铺运营者提供一个低成本的管理工具，让店铺管理成为一件低成本、高效率的事情。同时，吃1顿也为店铺提供丰富多样的营销工具，帮助店铺在公域流量和私域流量之前寻找适合自己的一套运营模式。新时代，吃1顿愿为数字化生活贡献一己之力！
      </span>
    </div>
    <div class="productInfo">
      <h2 class="title">链接</h2>
      <ul class="content">
        <li>咨询中心</li>
        <li>用户协议</li>
        <li>隐私政策</li>
      </ul>
    </div>
    <div class="productInfo">
      <h2 class="title">联系我们</h2>
      <ul class="content">
        <li><i class="el-icon-location icon"></i>长沙尘旭公司万家丽北路湘龙街道旁</li>
        <li><i class="el-icon-user-solid icon"></i>合作洽谈email：<a>Bin@pbk6.cn</a></li>
        <li><i class="el-icon-question icon"></i>商家网址：<a href="https://macromap.cxkjedu.com">https://macromap.cxkjedu.com</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom'
}
</script>

<style scoped>
.bottomContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #404343;
  padding: 40px 0;
}
.productInfo {
  padding-right: 90px;
  width: 295px;
  height: 218px;
  display: flex;
  text-align: left;
  flex-direction: column;
  /* background-color: pink; */
}
.title {
  font-weight: 700;
  color: #fff;
}
.content {
  color: #9d9d9d;
}
.content li {
  padding-bottom: 10px;
}
.content li a{
  text-decoration: underline;
  color: #9d9d9d;
}
</style>