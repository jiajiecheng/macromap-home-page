<template>
  <div class="join">
    <div class="header">
      <h1 class="title">加入我们</h1>
    </div>
    <div class="context">
      <ul class="list">
        <li class="item">
          <img src="../assets/h5.png" alt="h5" class="left">
          <div class="right">
            <h4>前端工程师</h4>
            <p>熟悉HTML+CSS+JS，了解VUE，对构建用户界面充满好奇和兴趣，愿意为交互逻辑和简洁漂亮的代码不断的思考思考再思考.</p>
          </div>
        </li>
        <li class="item">
          <img src="../assets/php.png" alt="h5" class="left">
          <div class="right">
            <h4>服务端开发工程师</h4>
            <p>基于PHP语言的后端逻辑和优化的开发，对服务器有着浓浓的兴趣。有着满满的学习兴趣，能够高效的与其他开发人员合作.</p>
          </div>
        </li>
        <li class="item">
          <img src="../assets/ui.png" alt="h5" class="left">
          <div class="right">
            <h4>UI设计师</h4>
            <p>对逻辑交互有独到的认识，对移动端和pc端，对原生应用和Web应用有着清晰的认识.设计不拘小节，大气清新，玩转各种风格，能够熟练的使用相关工具来提高自己的效率</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p class="contact">对以上工作职位有兴趣的同学，可以将简历发送至：<a href="">Bin@pbk6.cn</a>，如果有作品记得附带上作品或项目域名/截图哦~我在这里等你来哟</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data() {
    return {}
  }
}
</script>

<style scoped>
.join {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
}
.context .list,
.header .title,
.bottom .contact {
  width: 920px;
}
.header {
  margin: 60px 0;
}
.header .title {
  margin: 0 auto;

  font-size: 26px;
}
.context {
  display: flex;
  justify-content: center;
  align-items: center;
}
.context .list {
  display: flex;

  flex-direction: column;
}
.context .list .item {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}
.context .list .item .left {
  width: 55px;
  height: 50px;
}
.context .list .item .right {
  display: flex;
  flex-direction: column;
}
.right h4,
.right p {
  margin: 6px 0 6px 8px;
}
.right h4 {
  font-size: 20px;
}
.right p,
.bottom .contact,
.bottom .contact a {
  font-size: 16px;
  color: #999;
}
.bottom .contact {
  margin: 50px auto;
}
.bottom .contact a {
  text-decoration: underline;
}
</style>