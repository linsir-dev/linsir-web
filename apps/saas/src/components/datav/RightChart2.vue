<template>
  <div class="right-chart-2">
    <dv-flyline-chart :config="config" style="width: 100%; height: 100%" />
  </div>
</template>

<script lang="ts" setup>
const config = reactive({
  centerPoint: [0.48, 0.35],
  points: [
    [0.52, 0.23],
    [0.43, 0.29],
    [0.59, 0.35],
    [0.53, 0.47],
    [0.45, 0.54],
    [0.36, 0.38],
    [0.62, 0.55],
    [0.56, 0.56],
    [0.37, 0.66],
    [0.55, 0.81],
    [0.55, 0.67],
    [0.37, 0.29],
    [0.2, 0.36],
    [0.76, 0.41],
    [0.59, 0.18],
    [0.68, 0.17],
    [0.59, 0.1],
  ],
  bgImgUrl: "http://datav.jiaminghi.com/img/flylineChart/map.jpg",
});
const state = reactive({
  option: {
    series: [
      {
        type: "pie",
        data: [
          { name: "收费系统", value: 93 },
          { name: "通信系统", value: 66 },
          { name: "监控系统", value: 52 },
          { name: "供配电系统", value: 34 },
          { name: "其他", value: 22 },
        ],
        radius: ["45%", "65%"],
        insideLabel: {
          show: false,
        },
        outsideLabel: {
          labelLineEndLength: 10,
          formatter: "{percent}%\n{name}",
          style: {
            fontSize: 14,
            fill: "#fff",
          },
        },
      },
    ],
    color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
  },
});
</script>

<style lang="less">
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
