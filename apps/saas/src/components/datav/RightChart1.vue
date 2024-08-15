<template>
  <div class="right-chart-1">
    <dv-decoration-3 style="width: 400px; height: 30px" />
    <div style="width: 100%; margin-top: 50px; margin-left: 30px">
      <el-row :gutter="0">
        <el-col :span="12">
          <dv-decoration-9 style="width: 150px; height: 150px">
            66%
          </dv-decoration-9>
        </el-col>
        <el-col :span="12">
          <dv-decoration-9 style="width: 150px; height: 150px">
            60%
          </dv-decoration-9>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
const state = reactive({
  config: {
    data: [
      {
        name: "收费系统",
        value: 25,
      },
      {
        name: "通信系统",
        value: 66,
      },
      {
        name: "监控系统",
        value: 123,
      },
      {
        name: "供配电系统",
        value: 72,
      },
      {
        name: "其他",
        value: 99,
      },
    ],
    unit: "件",
  },
});
</script>

<style lang="less">
.right-chart-1 {
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
