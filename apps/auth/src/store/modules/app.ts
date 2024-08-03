// src/store/modules/app.ts
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

// 导入 Element Plus 中英文语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import defaultSettings from "@/settings";

// setup
export const useAppStore = defineStore("app", () => {
  const language = useStorage("language", defaultSettings.language);

  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    if (language?.value == "en") {
      return en;
    } else {
      return zhCn;
    }
  });

  /**
   * 切换语言
   */
  function changeLanguage(val: string) {
    language.value = val;
  }

  return {
    language,
    locale,
    changeLanguage,
  };
});
