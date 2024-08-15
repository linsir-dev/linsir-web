<template>
  <div class="left-chart-1">
    <div class="lc1-details">
      <el-row :gutter="0">
        <el-col :span="24">
          <div class="lc1-header">核心应用状态</div>
          <dv-decoration-3 style="width: 100%; height: 5px" />
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config1"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config2"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config3"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config4"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config5"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config6"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config7"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
        <el-col :span="6">
          <dv-percent-pond
            :config="state.config8"
            style="width: 80px; height: 50px"
          />
          <span>auth-server</span>
        </el-col>
      </el-row>
    </div>
    <div class="lc1-header" style="margin-top: 10px">应用状态</div>
    <dv-decoration-3 style="width: 100%; height: 30px; margin-top: 10px" />
    <el-row :gutter="5">
      <el-col :span="12">
        <dv-water-level-pond
          :config="state.configpond"
          style="width: 100%; height: 200px"
        />
      </el-col>
      <el-col :span="12">
        <dv-water-level-pond
          :config="state.configpond"
          style="width: 100%; height: 200px"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
const state = reactive({
  config1: { value: 66, localGradient: true },
  config2: { value: 2, localGradient: true },
  config3: { value: 30, localGradient: true },
  config4: { value: 20, localGradient: true },
  config5: { value: 15, localGradient: true },
  config6: { value: 30, localGradient: true },
  config7: { value: 60, localGradient: true },
  config8: { value: 25, localGradient: true },
  configpond: { data: [58] },
});
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 70%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  .lc1-details {
    font-size: 5px;
    display: flex;
    align-items: center;
    text-indent: 10px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
    }
    .el-col {
      margin-top: 5px;
      span {
        font-size: 12px;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
