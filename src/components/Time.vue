<template>
  <div class="timeContainer">
    <Title title="发展历程" abstract="本公司发展历程"/>
    <TimeLine :timelineList="timeLineArr" @scrollEvent="scrollEvent"/>
  </div>
</template>

<script>
import TimeLine from './TimeLine.vue'
import Title from './Title.vue'
export default {
  name: 'Time',
  components: { TimeLine, Title },
  data() {
    return {
      nomore: false,
      // 初始话模拟数据，数据较多时即可，形成滚动条。
      timeLineArr: [
        {
          id: 1,
          date: '2015',
          title: '2015',
          content: '2015年初，团队在北京注册公司',
          isShow: true,
          children: []
        },
        {
          id: 2,
          date: '2016',
          title: '2016',
          content: '2016年，公司成立销售团队',
          isShow: true,
          children: [
            {
              name: '创始团队',
              num: 5,
              content: '前期公司规划'
            }
          ]
        },
        {
          id: 3,
          date: '2017',
          title: '2017',
          content: '2017年，公司决定创建自有品牌，进行规模扩招团队',
          isShow: true,
          children: [
            {
              name: '销售部',
              num: 10,
              content: '负责市场开发'
            },
            {
              name: '技术部',
              num: 20,
              content: '前端：5人，后端10人，测试5人'
            }
          ]
        },
        {
          id: 4,
          date: '2018',
          title: '2018',
          content: '2018年，新增两个部门',
          isShow: true,
          children: [
            {
              name: '人力资源部',
              num: 3,
              content: '负责人才招聘'
            },
            {
              name: '财务部',
              num: 2,
              content: '财务结算'
            },
            {
              name: '总裁办',
              num: 2,
              content: ''
            }
          ]
        },
        {
          id: 5,
          date: '2019',
          title: '2019',
          content: '2019年',
          isShow: true,
          children: [
            {
              name: '商务企划部',
              num: 2,
              content: '对外合作'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 滚动监听
    scrollEvent(e) {
      if (e.srcElement.scrollLeft + e.srcElement.clientWidth >= e.srcElement.scrollWidth) {
        console.log('嘿嘿我在底部触发了')
        // 这里正常请求数据即可
        let data = [
          {
            id: 12,
            date: '2020',
            title: '2020',
            content: '2020年，受全球疫情影响，公司暂未扩招人员',
            isShow: true,
            children: []
          },
          {
            id: 22,
            date: '2021',
            title: '2021',
            content: '公司被xxx投资公司注入资本1000万，公司天使轮融资成功',
            isShow: true,
            children: [
              {
                name: '仓储部',
                num: 30,
                content: '负责货物存储'
              },
              {
                name: '物流部',
                num: 40,
                content: '负责自有配送'
              }
            ]
          },
          {
            id: 23,
            date: '2022',
            title: '2022',
            content: '公司进入A轮融资，公司被xx投资公司注入资本8000万。',
            isShow: false,
            children: []
          }
        ]
        if (!this.nomore) {
          this.timeLineArr[this.timeLineArr.length - 1].isShow = true
          this.timeLineArr.push(...data)
          this.nomore = true
        }
      }
    }
  }
}
</script>

<style scoped>
.timeContainer{
  background-color: #fff;
  /* height: 612px; */
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>