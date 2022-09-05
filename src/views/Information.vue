<template>
  <div class="informationContainer">
    <div class="header">
      <ul class="nav">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/home">合作共赢</router-link>
        </li>
        <li>
          <router-link to="/home">商店开启免费扫码点餐</router-link>
        </li>
        <li>
          <router-link to="/home">0成本创业，成为合伙人!</router-link>
        </li>
        <li>
          <router-link to="/home">智能餐饮系统</router-link>
        </li>
        <li>
          <router-link to="/home">关于我们</router-link>
        </li>
      </ul>
    </div>
    <div class="banner">
      <div class="block">
        <el-carousel trigger="click" height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../assets/head-bg-scaled.jpg" alt="轮播图" style="width:100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="content">
      <div class="articleLists">
        <div class="article" v-for="item in articleLists" :key="item.id">
          <img :src="item.imgSrc" alt="">
          <h1 class="title">{{item.title}}</h1>
          <p class="date">{{item.date}}</p>
          <p class="abstract">
            {{item.abstract}}
          </p>
        </div>
      </div>
      <div class="advertising">2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  data() {
    return {
      articleLists:[
        {
          id:1,
          imgSrc:'http://www.chi1dun.com/blog/wp-content/uploads/2020/08/pexels-sebastiaan-stam-1482476.jpg',
          title:'厨房人员配备方案该如何安排才能提高出餐效率',
          date:'10月 10, 2020',
          abstract:`餐厅厨房工作人员怎样装备？厨房人员配备方案就有很多依据。
            很多出资者在开了一家低本钱的出资餐厅后会面临人员安排。
            很多餐厅不重视后厨房的人员配备，但后厨房的人员是整个餐厅的中心。
            因为厨房人员、规划、档次的不同，咱们需求的餐厅人员装备也不同。
            那么，厨房人员岗位职责细分该如何实现，咱们应该如何分配餐厅职工呢`
        },
        {
          id:2,
          imgSrc:'http://www.chi1dun.com/blog/wp-content/uploads/2020/08/pexels-sebastiaan-stam-1482476.jpg',
          title:'厨房人员配备方案该如何安排才能提高出餐效率',
          date:'10月 10, 2020',
          abstract:`餐厅厨房工作人员怎样装备？厨房人员配备方案就有很多依据。
            很多出资者在开了一家低本钱的出资餐厅后会面临人员安排。
            很多餐厅不重视后厨房的人员配备，但后厨房的人员是整个餐厅的中心。
            因为厨房人员、规划、档次的不同，咱们需求的餐厅人员装备也不同。
            那么，厨房人员岗位职责细分该如何实现，咱们应该如何分配餐厅职工呢`
        },
        {
          id:3,
          imgSrc:'http://www.chi1dun.com/blog/wp-content/uploads/2020/08/pexels-sebastiaan-stam-1482476.jpg',
          title:'厨房人员配备方案该如何安排才能提高出餐效率',
          date:'10月 10, 2020',
          abstract:`餐厅厨房工作人员怎样装备？厨房人员配备方案就有很多依据。
            很多出资者在开了一家低本钱的出资餐厅后会面临人员安排。
            很多餐厅不重视后厨房的人员配备，但后厨房的人员是整个餐厅的中心。
            因为厨房人员、规划、档次的不同，咱们需求的餐厅人员装备也不同。
            那么，厨房人员岗位职责细分该如何实现，咱们应该如何分配餐厅职工呢`
        },
        {
          id:4,
          imgSrc:'http://www.chi1dun.com/blog/wp-content/uploads/2020/08/pexels-sebastiaan-stam-1482476.jpg',
          title:'厨房人员配备方案该如何安排才能提高出餐效率',
          date:'10月 10, 2020',
          abstract:`餐厅厨房工作人员怎样装备？厨房人员配备方案就有很多依据。
            很多出资者在开了一家低本钱的出资餐厅后会面临人员安排。
            很多餐厅不重视后厨房的人员配备，但后厨房的人员是整个餐厅的中心。
            因为厨房人员、规划、档次的不同，咱们需求的餐厅人员装备也不同。
            那么，厨房人员岗位职责细分该如何实现，咱们应该如何分配餐厅职工呢`
        }
      ]
    }
  }
}
</script>

<style scoped>
.informationContainer {
  margin-top: 75px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner {
  padding: 0 40px;
}
.nav {
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.header .nav li {
  padding: 20px 30px 20px 0;
}
.header .nav li a {
  color: #333;
}
.header .nav li a:hover {
  color: #999;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.articleLists {
  width: 700px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.article {
  border-radius: 2px;
  background: #f0f0f0;
  margin: 10px 10px 10px 0;
  flex: 1 1 340px;
  /* width: 340px; */
  display: flex;
  flex-direction: column;
}
.article img {
  width: 100%;
}
.article .title,
.article .date,
.article .abstract {
  margin: 0;
}
.article .title {
  color: #000;
  padding: 20px 15px 10px 15px;
  font-size: 20px;
}
.article .date {
  padding: 0 15px 20px 15px;
  font-size: 14px;
  color: #b99266;
}
.article .abstract {
  padding: 0 15px 30px 15px;
  color: #949494;
  line-height: 22px;
}

/*  */
.advertising {
  width: 480px;
  background-color: blue;
}
</style>