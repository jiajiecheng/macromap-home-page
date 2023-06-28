<template>
  <ul class="timeline-wrapper" @scroll="scrollEvent">
    <li class="timeline-item" v-for="item in timelineList" :key="item.id">
      <div class="timeline-box">
        <div class="out-circle">
          <div class="in-circle"></div>
          <div class="timeline-date">
            <el-popover placement="bottom" title="标题" width="200" trigger="hover" :content="item.content">
              <el-button type="text" slot="reference" class="father-text">{{
                item.date
              }}</el-button>
            </el-popover>
          </div>
        </div>
        <div class="long-line" v-show="item.isShow" :style="`width:${
            item.children ? (item.children.length + 1) * 100 : 1 * 100
          }px`">
          <div v-for="(subItem, index) in item.children" :key="subItem.id" class="sub-item-box">
            <span>{{ subItem.name + ":" + subItem.num }}人</span>
            <!-- 根据奇数偶数来判断向上还是向下 -->
            <div :class="`sub-line-box ${
                index % 2 == 0 ? 'top-line-box' : 'bottom-line-box'
              }`" v-show="subItem.content">
              <div :class="`children-line-box ${
                  index % 2 == 0 ? 'top-line' : 'bottom-line'
                }`"></div>
              <div :class="`children-box ${
                  index % 2 == 0 ? 'top-children-box' : 'bottom-children-box'
                }`">
                {{ subItem.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    timelineList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted() {},
  methods: {
    scrollEvent(e) {
      this.$emit("scrollEvent", e);
    },
    handleBottomClick() {
      this.$emit("handleBottomClick");
    },
  }
}
</script>

<style  scoped lang="scss">
ul.timeline-wrapper {
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 150px 20px;
  white-space: nowrap;
  overflow-x: scroll;
}

/* 时间线 */
.timeline-item {
  position: relative;
  display: inline-block;
  .timeline-box {
    text-align: center;

    // position: absolute;
    display: flex;
    align-items: center;
    .out-circle {
      width: 16px;
      height: 16px;
      background: #ff9b4a;
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
      /*opacity: 0.1;*/
      border-radius: 50%;
      display: flex;
      align-items: center;
      cursor: pointer;
      .in-circle {
        width: 8px;
        height: 8px;
        margin: 0 auto;
        background: #ff9b4a;
        border-radius: 50%;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
      }
      .timeline-date {
        color: #333;
        margin-top: 40px;
        .father-text {
          font-weight: 900;
          font-size: 16px;
          margin-left: -15px;
        }
      }
    }

    .long-line {
      // width: 300px;
      height: 2px;
      background: #ff9b4a;
      box-shadow: 0px 4px 12px 0px #ff9b4a;
      display: flex;
      flex-direction: revert;
      justify-content: space-around;
      .sub-item-box {
        margin-top: -20px;
        position: relative;
        .sub-line-box {
          // cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .children-line-box {
            width: 0px;
            border-left: 1px solid #ff9b4a;
          }
          .children-box {
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ff9b4a;
            white-space: break-spaces;
            text-align: center;
            padding: 5px;
          }
        }
        .top-line-box {
          margin-top: -100px;
          height: 60px;
        }
        .bottom-line-box {
          margin-top: 5px;
          height: 150px;
        }
        .top-line {
          height: 65px;
        }
        .bottom-line {
          height: 120px;
        }
        .top-children-box {
          margin-top: -90px;
          // height: 30px;
          width: 100px;
        }
        .bottom-children-box {
          // height: 120px;
          width: 150px;
        }
      }
    }
  }

  .timeline-content {
    box-sizing: border-box;
    margin-left: 20px;
    height: 106px;
    padding: 0 0 0 20px;
    text-align: left;
    margin-bottom: 30px;

    .timeline-title {
      font-size: 14px;
      word-break: break-all;
      margin-bottom: 16px;
      color: #333;
      font-weight: 500;
      /*display: inline;*/
    }
    .timeline-desc {
      font-size: 14px;
      color: #999999;
    }
  }
}

.timeline-item:last-of-type .timeline-content {
  margin-bottom: 0;
}

</style>