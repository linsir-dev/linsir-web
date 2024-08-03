<script setup lang="ts">
import { useAppStore, useSettingsStore } from "@/store";
import defaultSettings from "@/settings";
import { ThemeEnum } from "@/enums/ThemeEnum";
import { SizeEnum } from "@/enums/SizeEnum";
import { useCounterStore } from "@/store/counter";

const appStore = useAppStore();
const counterStore = useCounterStore();
const settingsStore = useSettingsStore();

const locale = computed(() => {
  appStore.locale;
});

const watermarkEnabled = computed(() => {
  settingsStore.watermarkEnabled;
});

// 明亮/暗黑主题水印字体颜色适配
const fontColor = computed(() => {
  return settingsStore.theme === ThemeEnum.DARK
    ? "rgba(255, 255, 255, .15)"
    : "rgba(0, 0, 0, .15)";
});
console.log(import.meta.env.VITE_APP_TITLE);
</script>

<template>
  <el-config-provider :locale="appStore.locale">
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
