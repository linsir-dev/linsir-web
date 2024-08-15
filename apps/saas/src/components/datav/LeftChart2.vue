<template>
  <div class="left-chart-2">
    <div class="lc2-header">实例租户状态</div>
    <dv-decoration-6 style="width: 100%; height: 30px" />
    <div class="lc2-details"></div>
    <dv-conical-column-chart
      :config="dataS.config"
      style="width: 100%; height: 300px"
    />

    <dv-decoration-2 style="height: 10px" />
  </div>
</template>

<script lang="ts" setup>
const dataS = reactive({
  config: {
    data: [
      {
        name: "周口",
        value: 55,
      },
      {
        name: "南阳",
        value: 120,
      },
      {
        name: "西峡",
        value: 71,
      },
      {
        name: "驻马店",
        value: 66,
      },
      {
        name: "新乡",
        value: 80,
      },
    ],
  },
});

const state = reactive({
  option: {
    series: [
      {
        type: "pie",
        data: [
          { name: "收费系统", value: 93 },
          { name: "通信系统", value: 32 },
          { name: "监控系统", value: 65 },
          { name: "供配电系统", value: 44 },
          { name: "其他", value: 52 },
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
.left-chart-2 {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;

  .lc2-header {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  .lc2-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  .lc2-chart {
    height: calc(~"100% - 80px");
  }
}
</style>
