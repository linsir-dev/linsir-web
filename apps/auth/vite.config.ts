import { UserConfig, ConfigEnv, loadEnv, defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
import  dotenv  from 'dotenv'
import {
  name,
  version,
  engines,
  dependencies,
  devDependencies,
} from "./package.json";

const pathSrc = resolve(__dirname, "src")
/** 平台的名称、版本、运行所需的`node`版本、依赖、构建时间的类型提示 */
const __APP_INFO__ = {
  pkg: { name, version, engines, dependencies, devDependencies },
  buildTimestamp: Date.now(),
};


// https://vitejs.dev/config/
export default defineConfig(({mode}:ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
      resolve: {
        alias: {
          "@": pathSrc,
        },
      },
      css: {
         preprocessorOptions: {
          //define global scss variabl
          scss: {
            javascriptEnabled: true,
            additionalData: `@use "@/styles/variables.scss" as *;`
          }  
         }
      },
      plugins: [
        UnoCSS({ /* options */ }),
        vue(),
        AutoImport({
          resolvers: [
             // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({}),
          ],
          vueTemplate: true, // 是否在 vue 模板中自动导入
          //自动导入 Vue 相关函数，如：ref, reactive, toRef 等
          imports: ["vue"],
          eslintrc: {
            enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false 
            filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
          },
          dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),  // 指定自动导入函数TS类型声明文件路径
        }),
        Components({
          resolvers: [
            // 自动导入 Element Plus 组件
            ElementPlusResolver(),
            // 自动注册图标组件
            IconsResolver({
              enabledCollections: ["ep"] // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
            }),
          ],
          dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
        }),
        Icons({
          // 自动安装图标库
          autoInstall: true,
        }),
        createSvgIconsPlugin({
          // 指定需要缓存的图标文件夹
          iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
          // 指定symbolId格式
          symbolId: 'icon-[dir]-[name]',
      }),
      ],
      define:{
        __APP_INFO__: JSON.stringify(__APP_INFO__),
      }
  }
})
