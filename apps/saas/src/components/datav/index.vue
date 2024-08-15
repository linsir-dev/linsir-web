<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left">
          <dv-border-box-1
            style="
              width: 120px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              margin-left: 50px;
            "
          >
            <a href="/#/dashboard" target="_blank">综合管理</a>
          </dv-border-box-1>
        </div>
        <div class="mh-middle">
          SaaS 实时展示中心
          <dv-decoration-5 style="width: 600px; height: 60px" />
        </div>
        <div class="mh-right">
          <dv-border-box-1
            style="
              width: 120px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              margin-right: 50px;
            "
          >
            <el-avatar
              style="margin-top: 10px"
              :size="30"
              src="https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif?imageView2/1/w/80/h/80"
            />
          </dv-border-box-1>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-13 class="left-chart-container">
          <Left-Chart-1 />
          <Left-Chart-2 />
        </dv-border-box-13>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-13 class="rmctc-left-container">
              <Center-Cmp />
            </dv-border-box-13>

            <div class="rmctc-right-container">
              <dv-border-box-13 class="rmctc-chart-1">
                <Right-Chart-1 />
              </dv-border-box-13>

              <dv-border-box-13 class="rmctc-chart-2" :reverse="true">
                <Right-Chart-2 />
              </dv-border-box-13>
            </div>
          </div>

          <dv-border-box-13 class="rmc-bottom-container">
            <Bottom-Charts />
          </dv-border-box-13>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script lang="ts" setup>
// import LeftChart1 from './LeftChart1.vue'
// import LeftChart2 from './LeftChart2.vue'
// import LeftChart3 from './LeftChart3.vue'

// import CenterCmp from './CenterCmp.vue'

// import RightChart1 from './RightChart1.vue'
// import RightChart2 from './RightChart2.vue'

// import BottomCharts from './BottomCharts.vue'
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #ffffff;

  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px rgb(11, 11, 172);
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left,
    .mh-right {
      font-size: 20px;
      color: rgb(1, 134, 187);

      a:visited {
        color: rgb(1, 134, 187);
      }
    }
    .mh-middle {
      font-size: 30px;
      width: 600px;
      text-align: center;
      line-height: 1px;
      font-weight: bold;
      color: rgb(1, 134, 187);
    }
  }

  .main-container {
    height: 75%;

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 70%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 30%;
  }

  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
}
</style>
