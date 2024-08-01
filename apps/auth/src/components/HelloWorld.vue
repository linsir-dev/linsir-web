<script setup lang="ts">
import { ref } from 'vue'
import variables from "@/styles/variables.module.scss";
import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();

console.log(variables.bgColor)  


defineProps<{ msg: string }>()

const count = ref(0)


</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Editasasadasdasd
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>  
  <div>
    <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
    <el-button type="info"><i-ep-InfoFilled />Info</el-button>
    <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
    <el-button type="danger"><i-ep-WarnTriangleFilled /><svg-icon icon-class="heart-square"/>SVG 本地图标 Danger</el-button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div class="box">
   aaaa
  </div>

  <el-form>
      <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
      <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
    </el-form>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>


<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
</style>

