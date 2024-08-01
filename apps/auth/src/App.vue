<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { ElConfigProvider } from 'element-plus'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore();
const counterStore = useCounterStore();
console.log(import.meta.env.VITE_APP_TITLE)

</script>

<template>
  <el-config-provider :locale="appStore.locale" >
    <router-view />
  </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
