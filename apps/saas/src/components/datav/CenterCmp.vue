<template>
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width: 200px; height: 50px" />
      <div>SaaS概览</div>
      <dv-decoration-1 style="width: 200px; height: 50px" />
    </div>
    <el-row :gutter="0">
      <el-col :span="2">
        <dv-loading />
      </el-col>
      <el-col :span="4">
        <div class="cc-details">
          <div>租户数量</div>
        </div>
      </el-col>
      <el-col :span="6">
        <dv-digital-flop
          :config="state.flop1"
          style="width: 200px; height: 50px; margin-top: 15px; font-weight: bold"
        />
      </el-col>
      <el-col :span="2">
        <dv-loading />
      </el-col>
      <el-col :span="4">
        <div class="cc-details">
          <div>应用实例</div>
        </div>
      </el-col>
      <el-col :span="6">
        <dv-digital-flop
          :config="state.flop2"
          style="width: 200px; height: 50px; margin-top: 15px; font-weight: bold"
        />
      </el-col>
    </el-row>

    <div class="cc-main-container">
      <dv-capsule-chart :config="state.chart1" style="width: 300px; height: 200px" />
      <dv-capsule-chart :config="state.chart2" style="width: 300px; height: 200px" />
      <dv-capsule-chart :config="state.chart3" style="width: 300px; height: 200px" />
    </div>
    <div class="cc-main-container">
      <dv-water-level-pond :config="state.pond1" style="width: 300px; height: 200px" />
      <dv-water-level-pond :config="state.pond2" style="width: 300px; height: 200px" />
      <dv-water-level-pond :config="state.pond3" style="width: 300px; height: 200px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const state = reactive({
  pond1: {
    data: [66],
  },
  pond2: {
    data: [20],
  },
  pond3: {
    data: [80],
  },
  chart1: {
    data: [
      {
        name: "app-saas",
        value: 167,
      },
      {
        name: "app-auth",
        value: 67,
      },
      {
        name: "app-sys",
        value: 123,
      },
      {
        name: "app-base",
        value: 55,
      },
      {
        name: "app-file",
        value: 98,
      },
    ],
  },
  chart2: {
    data: [
      {
        name: "saas-026x",
        value: 127,
      },
      {
        name: "saas-096x",
        value: 20,
      },
      {
        name: "saas-05x",
        value: 123,
      },
      {
        name: "saas-056x",
        value: 155,
      },
      {
        name: "saas-059x",
        value: 58,
      },
    ],
  },
  chart3: {
    data: [
      {
        name: "ex-026x",
        value: 127,
      },
      {
        name: "ex-096x",
        value: 20,
      },
      {
        name: "ex-05x",
        value: 13,
      },
      {
        name: "ex-056x",
        value: 15,
      },
      {
        name: "ex-059x",
        value: 8,
      },
    ],
  },
  flop1: {
    number: [8],
    content: "{nt}个",
  },
  flop2: {
    number: [35],
    content: "{nt}个",
  },
  config: {
    data: [
      {
        name: "收费站",
        value: 1315,
      },
      {
        name: "监控中心",
        value: 415,
      },
      {
        name: "道路外场",
        value: 90,
      },
      {
        name: "其他",
        value: 317,
      },
    ],
    color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
    lineWidth: 30,
    radius: "55%",
    activeRadius: "60%",
  },

  labelConfig: {
    data: ["收费站", "监控中心", "道路外场", "其他"],
  },
});
</script>

<style lang="less">
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;

  .cc-header {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-weight: bold;

    .el-col {
      margin-top: 30px;
    }
  }

  .cc-details {
    margin-top: 15px;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 30px;
    align-items: center;
    font-weight: bold;

    .card {
      background-color: rgba(4, 49, 128, 0.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }

  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;

    .ccmc-middle {
      width: 50%;
      height: 90%;

      .active-ring-name {
        font-size: 20px !important;
      }
    }

    .ccmc-left,
    .ccmc-right {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 24px;

      span {
        font-size: 40px;
        font-weight: bold;
      }

      .station-info {
        height: 80px;
        display: flex;
        align-items: center;
      }
    }

    .ccmc-left {
      align-items: flex-end;

      span {
        margin-left: 20px;
      }
    }

    .ccmc-right {
      align-items: flex-start;

      span {
        margin-right: 20px;
      }
    }
  }

  .label-tag {
    position: absolute;
    width: 500px;
    height: 30px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
