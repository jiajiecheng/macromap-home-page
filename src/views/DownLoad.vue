<template>
  <div class="downloadContainer">
    <div class="title">
      <Title title="下载中心" abstract="为服务人员、管理人员等提供手持设备的点菜、取号、预约、收银等功能。" />
    </div>
    <div class="download-class">
      <div class="list">
        <div class="item">
          <h1 class="port">Android端</h1>
          <p class="introduce">Android端ipad应用下载</p>
          <img src="../assets/android.png" alt="" class="icon">
          <p class="version">当前版本：v1.3.2</p>
          <button class="download">下载Android版</button>
        </div>
        <div class="item">
          <h1 class="port">IOS端</h1>
          <p class="introduce">IOS端ipad应用下载</p>
          <img src="../assets/ios.png" alt="" class="icon">
          <p class="version">当前版本：v1.3.2</p>
          <button class="download">下载IOS版</button>
        </div>
        <div class="item">
          <h1 class="port">Web端</h1>
          <p class="introduce">web端商家系统</p>
          <img src="../assets/web.png" alt="" class="icon">
           <p class="version">当前版本：v1.3.2</p>
          <button class="download">进入商家系统</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Bottom from '@/components/Bottom.vue';
import Copyright from '@/components/Copyright.vue';
export default {
  components: { Title, Bottom, Copyright }
}
</script>

<style scoped>
.downloadContainer {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
}
.title {
  padding: 100px 0;
}
.download-class {
  padding-bottom: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.download-class .list {
  display: flex;
  flex-direction: row;
  width: 960px;
  justify-content: space-between;
  align-items: center;
}
.download-class .list .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
.item .port {
  margin: 0;
  font-size: 24px;
}
.item .introduce,
.item .version {
  color: #999;
}
.item .introduce {
  font-size: 18px;
  margin: 8px 0;
}
.item .icon {
  margin-bottom: 10px;
  width: 100px;
}

.download {
  background-color: #ff9b4a;
  width: 160px;
  height: 44px;
  font-weight: 900;
  line-height: 26px;
  border: 2px solid #ff9b4a;
  border-radius: 100px;
  color: #fff;
}
.download:hover {
  background-color: #fff;
  color: #ff9b4a;
}
</style>