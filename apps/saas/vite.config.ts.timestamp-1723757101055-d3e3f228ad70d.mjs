// vite.config.ts
import vue from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.3.5_@types+node@20.14.14_less@4.2.0_sass@1.77.8_terser@5.31.3_c35ad3py5cmjv253ysc34wnuna/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.3.5_@types+node@20.14.14_less@4.2.0_sass@1.77.8_terser@5._yp3ktfh4elmd5kocsxdthzo5yi/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { loadEnv, defineConfig } from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.14_less@4.2.0_sass@1.77.8_terser@5.31.3/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.0_vue@3.4.35_typescript@5.5.4___rollup@4.19.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.3_rollup@4.19.2_vue@3.4.35_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.3_rollup@4.19.2_vue@3.4.35_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/unplugin-icons@0.18.5_@vue+compiler-sfc@3.4.35/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/unplugin-icons@0.18.5_@vue+compiler-sfc@3.4.35/node_modules/unplugin-icons/dist/resolver.js";
import { createSvgIconsPlugin } from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.3.5_@types+node@20.14.14_less@4.2.0_sass@1.77.8_terser@5.31.3_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import mockDevServerPlugin from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/vite-plugin-mock-dev-server@1.6.1_bufferutil@4.0.8_rollup@4.19.2_utf-8-validate@5.0.10_vite@5_lqspiffzdpxgi7ue43n3evl4aa/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import UnoCSS from "file:///D:/dev/2024/linsir_github/linsir-web/node_modules/.pnpm/unocss@0.58.9_postcss@8.4.40_rollup@4.19.2_vite@5.3.5_@types+node@20.14.14_less@4.2.0_sass@1.77.8_terser@5.31.3_/node_modules/unocss/dist/vite.mjs";
import { resolve } from "path";

// package.json
var name = "saas";
var version = "1.0.0";
var dependencies = {
  "@element-plus/icons-vue": "^2.3.1",
  "@kjgl77/datav-vue3": "^1.7.3",
  "@vueuse/core": "^10.11.0",
  "@wangeditor/editor": "^5.1.23",
  "@wangeditor/editor-for-vue": "5.1.10",
  "animate.css": "^4.1.1",
  axios: "^1.7.3",
  codemirror: "^5.65.17",
  "codemirror-editor-vue3": "^2.7.0",
  color: "^4.2.3",
  echarts: "^5.5.1",
  "element-plus": "^2.7.8",
  exceljs: "^4.4.0",
  "lodash-es": "^4.17.21",
  net: "^1.0.2",
  nprogress: "^0.2.0",
  "path-browserify": "^1.0.1",
  "path-to-regexp": "^6.2.2",
  pinia: "^2.2.0",
  qs: "^6.13.0",
  "sockjs-client": "1.6.1",
  sortablejs: "^1.15.2",
  stompjs: "^2.3.3",
  vue: "^3.4.35",
  "vue-i18n": "9.9.1",
  "vue-router": "^4.4.2"
};
var devDependencies = {
  "@commitlint/cli": "^18.6.1",
  "@commitlint/config-conventional": "^18.6.3",
  "@iconify-json/ep": "^1.1.15",
  "@types/codemirror": "^5.60.15",
  "@types/color": "^3.0.6",
  "@types/lodash": "^4.17.7",
  "@types/node": "^20.14.14",
  "@types/nprogress": "^0.2.3",
  "@types/path-browserify": "^1.0.2",
  "@types/qs": "^6.9.15",
  "@types/sockjs-client": "^1.5.4",
  "@types/sortablejs": "^1.15.8",
  "@types/stompjs": "^2.3.9",
  "@typescript-eslint/eslint-plugin": "^7.18.0",
  "@typescript-eslint/parser": "^7.18.0",
  "@vitejs/plugin-vue": "^5.1.2",
  "@vitejs/plugin-vue-jsx": "^3.1.0",
  autoprefixer: "^10.4.20",
  commitizen: "^4.3.0",
  "cz-git": "^1.9.4",
  eslint: "^8.57.0",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-import": "^2.29.1",
  "eslint-plugin-prettier": "^5.2.1",
  "eslint-plugin-vue": "^9.27.0",
  "fast-glob": "^3.3.2",
  husky: "^9.1.4",
  less: "^4.2.0",
  "lint-staged": "^15.2.8",
  postcss: "^8.4.40",
  "postcss-html": "^1.7.0",
  "postcss-scss": "^4.0.9",
  prettier: "^3.3.3",
  sass: "^1.77.8",
  stylelint: "^16.8.1",
  "stylelint-config-html": "^1.1.0",
  "stylelint-config-recess-order": "^4.6.0",
  "stylelint-config-recommended-scss": "^14.1.0",
  "stylelint-config-recommended-vue": "^1.5.0",
  "stylelint-config-standard": "^36.0.1",
  terser: "^5.31.3",
  typescript: "^5.5.4",
  unocss: "^0.58.9",
  "unplugin-auto-import": "^0.17.8",
  "unplugin-icons": "^0.18.5",
  "unplugin-vue-components": "^0.26.0",
  vite: "^5.3.5",
  "vite-plugin-mock-dev-server": "^1.6.1",
  "vite-plugin-svg-icons": "^2.0.1",
  "vite-plugin-vue-devtools": "^7.3.7",
  "vue-tsc": "^2.0.29"
};
var engines = {
  node: ">=18.0.0"
};

// vite.config.ts
var __vite_injected_original_dirname = "D:\\dev\\2024\\linsir_github\\linsir-web\\apps\\saas";
var __APP_INFO__ = {
  pkg: { name, version, engines, dependencies, devDependencies },
  buildTimestamp: Date.now()
};
var pathSrc = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": pathSrc
      }
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `
        }
      }
    },
    server: {
      // 允许IP访问
      host: "0.0.0.0",
      // 应用端口 (默认:3000)
      port: Number(env.VITE_APP_PORT),
      // 运行是否自动打开浏览器
      open: true,
      proxy: {
        /** 代理前缀为 /dev-api 的请求  */
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 接口地址 例如：http://vapi.youlai.tech
          target: env.VITE_APP_API_URL,
          rewrite: (path) => path.replace(new RegExp("^" + env.VITE_APP_BASE_API), "")
        }
      }
    },
    plugins: [
      vue(),
      // jsx、tsx语法支持
      vueJsx(),
      // MOCK 服务
      env.VITE_MOCK_DEV_SERVER === "true" ? mockDevServerPlugin() : null,
      UnoCSS({
        hmrTopLevelAwait: false
      }),
      /** 自动导入配置  @see https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts */
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "@vueuse/core", "pinia", "vue-router", "vue-i18n"],
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({})
        ],
        eslintrc: {
          // 是否自动生成 eslint 规则，建议生成之后设置 false
          enabled: false,
          // 指定自动导入函数 eslint 规则的文件
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true
        },
        // 是否在 vue 模板中自动导入
        vueTemplate: true,
        // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)
        dts: false
        // dts: "src/types/auto-imports.d.ts",
      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
            enabledCollections: ["ep"]
          })
        ],
        // 指定自定义组件位置(默认:src/components)
        dirs: ["src/components", "src/**/components"],
        // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
        dts: false
        // dts: "src/types/components.d.ts",
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(pathSrc, "assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      })
      /* VueDevTools({
        openInEditorHost: `http://localhost:${env.VITE_APP_PORT}`,
      }), */
    ],
    // 预加载项目必需的组件
    optimizeDeps: {
      include: [
        "vue",
        "vue-router",
        "pinia",
        "axios",
        "@vueuse/core",
        "sortablejs",
        "path-to-regexp",
        "echarts",
        "@wangeditor/editor",
        "@wangeditor/editor-for-vue",
        "vue-i18n",
        "path-browserify",
        "element-plus/es/components/form/style/css",
        "element-plus/es/components/form-item/style/css",
        "element-plus/es/components/button/style/css",
        "element-plus/es/components/input/style/css",
        "element-plus/es/components/input-number/style/css",
        "element-plus/es/components/switch/style/css",
        "element-plus/es/components/upload/style/css",
        "element-plus/es/components/menu/style/css",
        "element-plus/es/components/col/style/css",
        "element-plus/es/components/icon/style/css",
        "element-plus/es/components/row/style/css",
        "element-plus/es/components/tag/style/css",
        "element-plus/es/components/dialog/style/css",
        "element-plus/es/components/loading/style/css",
        "element-plus/es/components/radio/style/css",
        "element-plus/es/components/radio-group/style/css",
        "element-plus/es/components/popover/style/css",
        "element-plus/es/components/scrollbar/style/css",
        "element-plus/es/components/tooltip/style/css",
        "element-plus/es/components/dropdown/style/css",
        "element-plus/es/components/dropdown-menu/style/css",
        "element-plus/es/components/dropdown-item/style/css",
        "element-plus/es/components/sub-menu/style/css",
        "element-plus/es/components/menu-item/style/css",
        "element-plus/es/components/divider/style/css",
        "element-plus/es/components/card/style/css",
        "element-plus/es/components/link/style/css",
        "element-plus/es/components/breadcrumb/style/css",
        "element-plus/es/components/breadcrumb-item/style/css",
        "element-plus/es/components/table/style/css",
        "element-plus/es/components/tree-select/style/css",
        "element-plus/es/components/table-column/style/css",
        "element-plus/es/components/select/style/css",
        "element-plus/es/components/option/style/css",
        "element-plus/es/components/pagination/style/css",
        "element-plus/es/components/tree/style/css",
        "element-plus/es/components/alert/style/css",
        "element-plus/es/components/radio-button/style/css",
        "element-plus/es/components/checkbox-group/style/css",
        "element-plus/es/components/checkbox/style/css",
        "element-plus/es/components/tabs/style/css",
        "element-plus/es/components/tab-pane/style/css",
        "element-plus/es/components/rate/style/css",
        "element-plus/es/components/date-picker/style/css",
        "element-plus/es/components/notification/style/css",
        "element-plus/es/components/image/style/css",
        "element-plus/es/components/statistic/style/css",
        "element-plus/es/components/watermark/style/css",
        "element-plus/es/components/config-provider/style/css",
        "element-plus/es/components/text/style/css",
        "element-plus/es/components/drawer/style/css",
        "element-plus/es/components/color-picker/style/css",
        "element-plus/es/components/backtop/style/css",
        "element-plus/es/components/message-box/style/css",
        "element-plus/es/components/skeleton/style/css",
        "element-plus/es/components/skeleton/style/css",
        "element-plus/es/components/skeleton-item/style/css",
        "element-plus/es/components/badge/style/css",
        "element-plus/es/components/steps/style/css",
        "element-plus/es/components/step/style/css"
      ]
    },
    // 构建配置
    build: {
      chunkSizeWarningLimit: 2e3,
      // 消除打包大小超过500kb警告
      minify: "terser",
      // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
      terserOptions: {
        compress: {
          keep_infinity: true,
          // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true,
          // 生产环境去除 console
          drop_debugger: true
          // 生产环境去除 debugger
        },
        format: {
          comments: false
          // 删除注释
        }
      },
      rollupOptions: {
        output: {
          // manualChunks: {
          //   "vue-i18n": ["vue-i18n"],
          // },
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: "js/[name].[hash].js",
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: "js/[name].[hash].js",
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split(".");
            let extType = info[info.length - 1];
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = "img";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "fonts";
            }
            return `${extType}/[name].[hash].[ext]`;
          }
        }
      }
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcZGV2XFxcXDIwMjRcXFxcbGluc2lyX2dpdGh1YlxcXFxsaW5zaXItd2ViXFxcXGFwcHNcXFxcc2Fhc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZGV2XFxcXDIwMjRcXFxcbGluc2lyX2dpdGh1YlxcXFxsaW5zaXItd2ViXFxcXGFwcHNcXFxcc2Fhc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZGV2LzIwMjQvbGluc2lyX2dpdGh1Yi9saW5zaXItd2ViL2FwcHMvc2Fhcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWcsIENvbmZpZ0VudiwgbG9hZEVudiwgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XHJcbmltcG9ydCBJY29ucyBmcm9tIFwidW5wbHVnaW4taWNvbnMvdml0ZVwiO1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgbW9ja0RldlNlcnZlclBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tbW9jay1kZXYtc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHtcclxuICBuYW1lLFxyXG4gIHZlcnNpb24sXHJcbiAgZW5naW5lcyxcclxuICBkZXBlbmRlbmNpZXMsXHJcbiAgZGV2RGVwZW5kZW5jaWVzLFxyXG59IGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xyXG5cclxuLyoqIEBzZWUgIGh0dHBzOi8vZGV2dG9vbHMtbmV4dC52dWVqcy5vcmcgICovXHJcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XHJcblxyXG4vKiogXHU1RTczXHU1M0YwXHU3Njg0XHU1NDBEXHU3OUYwXHUzMDAxXHU3MjQ4XHU2NzJDXHUzMDAxXHU4RkQwXHU4ODRDXHU2MjQwXHU5NzAwXHU3Njg0YG5vZGVgXHU3MjQ4XHU2NzJDXHUzMDAxXHU0RjlEXHU4RDU2XHUzMDAxXHU2Nzg0XHU1RUZBXHU2NUY2XHU5NUY0XHU3Njg0XHU3QzdCXHU1NzhCXHU2M0QwXHU3OTNBICovXHJcbmNvbnN0IF9fQVBQX0lORk9fXyA9IHtcclxuICBwa2c6IHsgbmFtZSwgdmVyc2lvbiwgZW5naW5lcywgZGVwZW5kZW5jaWVzLCBkZXZEZXBlbmRlbmNpZXMgfSxcclxuICBidWlsZFRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxufTtcclxuXHJcbmNvbnN0IHBhdGhTcmMgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XHJcbi8qKiAgVml0ZVx1OTE0RFx1N0Y2RSBAc2VlIGh0dHBzOi8vY24udml0ZWpzLmRldi9jb25maWcgKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBwYXRoU3JjLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICAvLyBDU1MgXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAvLyBcdTVCOUFcdTRFNDlcdTUxNjhcdTVDNDAgU0NTUyBcdTUzRDhcdTkxQ0ZcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXHJcbiAgICAgICAgICAgIEB1c2UgXCJAL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiIGFzICo7XHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIC8vIFx1NTE0MVx1OEJCOElQXHU4QkJGXHU5NUVFXHJcbiAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgICAvLyBcdTVFOTRcdTc1MjhcdTdBRUZcdTUzRTMgKFx1OUVEOFx1OEJBNDozMDAwKVxyXG4gICAgICBwb3J0OiBOdW1iZXIoZW52LlZJVEVfQVBQX1BPUlQpLFxyXG4gICAgICAvLyBcdThGRDBcdTg4NENcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjhcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAvKiogXHU0RUUzXHU3NDA2XHU1MjREXHU3RjAwXHU0RTNBIC9kZXYtYXBpIFx1NzY4NFx1OEJGN1x1NkM0MiAgKi9cclxuICAgICAgICBbZW52LlZJVEVfQVBQX0JBU0VfQVBJXToge1xyXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgLy8gXHU2M0E1XHU1M0UzXHU1NzMwXHU1NzQwIFx1NEY4Qlx1NTk4Mlx1RkYxQWh0dHA6Ly92YXBpLnlvdWxhaS50ZWNoXHJcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX0FQUF9BUElfVVJMLFxyXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+XHJcbiAgICAgICAgICAgIHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKFwiXlwiICsgZW52LlZJVEVfQVBQX0JBU0VfQVBJKSwgXCJcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZ1ZSgpLFxyXG4gICAgICAvLyBqc3hcdTMwMDF0c3hcdThCRURcdTZDRDVcdTY1MkZcdTYzMDFcclxuICAgICAgdnVlSnN4KCksXHJcbiAgICAgIC8vIE1PQ0sgXHU2NzBEXHU1MkExXHJcbiAgICAgIGVudi5WSVRFX01PQ0tfREVWX1NFUlZFUiA9PT0gXCJ0cnVlXCIgPyBtb2NrRGV2U2VydmVyUGx1Z2luKCkgOiBudWxsLFxyXG4gICAgICBVbm9DU1Moe1xyXG4gICAgICAgIGhtclRvcExldmVsQXdhaXQ6IGZhbHNlLFxyXG4gICAgICB9KSxcclxuICAgICAgLyoqIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1OTE0RFx1N0Y2RSAgQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3h6ei9lbGVtZW50LXBsdXMtYmVzdC1wcmFjdGljZXMvYmxvYi9tYWluL3ZpdGUuY29uZmlnLnRzICovXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBWdWUgXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHVGRjBDXHU1OTgyXHVGRjFBcmVmLCByZWFjdGl2ZSwgdG9SZWYgXHU3QjQ5XHJcbiAgICAgICAgaW1wb3J0czogW1widnVlXCIsIFwiQHZ1ZXVzZS9jb3JlXCIsIFwicGluaWFcIiwgXCJ2dWUtcm91dGVyXCIsIFwidnVlLWkxOG5cIl0sXHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQUVsTWVzc2FnZSwgRWxNZXNzYWdlQm94Li4uIChcdTVFMjZcdTY4MzdcdTVGMEYpXHJcbiAgICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXHJcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcclxuICAgICAgICAgIEljb25zUmVzb2x2ZXIoe30pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZXNsaW50cmM6IHtcclxuICAgICAgICAgIC8vIFx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMCBlc2xpbnQgXHU4OUM0XHU1MjE5XHVGRjBDXHU1RUZBXHU4QkFFXHU3NTFGXHU2MjEwXHU0RTRCXHU1NDBFXHU4QkJFXHU3RjZFIGZhbHNlXHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTFGRFx1NjU3MCBlc2xpbnQgXHU4OUM0XHU1MjE5XHU3Njg0XHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICBmaWxlcGF0aDogXCIuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uXCIsXHJcbiAgICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gXHU2NjJGXHU1NDI2XHU1NzI4IHZ1ZSBcdTZBMjFcdTY3N0ZcdTRFMkRcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcclxuICAgICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcclxuICAgICAgICAvLyBcdTYzMDdcdTVCOUFcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTUxRkRcdTY1NzBUU1x1N0M3Qlx1NTc4Qlx1NThGMFx1NjYwRVx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NCAoZmFsc2U6XHU1MTczXHU5NUVEXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwKVxyXG4gICAgICAgIGR0czogZmFsc2UsXHJcbiAgICAgICAgLy8gZHRzOiBcInNyYy90eXBlcy9hdXRvLWltcG9ydHMuZC50c1wiLFxyXG4gICAgICB9KSxcclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1N0VDNFx1NEVGNlxyXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxyXG4gICAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDXHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XHJcbiAgICAgICAgICBJY29uc1Jlc29sdmVyKHtcclxuICAgICAgICAgICAgLy8gZWxlbWVudC1wbHVzXHU1NkZFXHU2ODA3XHU1RTkzXHVGRjBDXHU1MTc2XHU0RUQ2XHU1NkZFXHU2ODA3XHU1RTkzIGh0dHBzOi8vaWNvbi1zZXRzLmljb25pZnkuZGVzaWduL1xyXG4gICAgICAgICAgICBlbmFibGVkQ29sbGVjdGlvbnM6IFtcImVwXCJdLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBcdTYzMDdcdTVCOUFcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjZcdTRGNERcdTdGNkUoXHU5RUQ4XHU4QkE0OnNyYy9jb21wb25lbnRzKVxyXG4gICAgICAgIGRpcnM6IFtcInNyYy9jb21wb25lbnRzXCIsIFwic3JjLyoqL2NvbXBvbmVudHNcIl0sXHJcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU3RUM0XHU0RUY2VFNcdTdDN0JcdTU3OEJcdTU4RjBcdTY2MEVcdTY1ODdcdTRFRjZcdThERUZcdTVGODQgKGZhbHNlOlx1NTE3M1x1OTVFRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMClcclxuICAgICAgICBkdHM6IGZhbHNlLFxyXG4gICAgICAgIC8vIGR0czogXCJzcmMvdHlwZXMvY29tcG9uZW50cy5kLnRzXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBJY29ucyh7XHJcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1Qjg5XHU4OEM1XHU1NkZFXHU2ODA3XHU1RTkzXHJcbiAgICAgICAgYXV0b0luc3RhbGw6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XHJcbiAgICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHBhdGhTcmMsIFwiYXNzZXRzL2ljb25zXCIpXSxcclxuICAgICAgICAvLyBcdTYzMDdcdTVCOUFzeW1ib2xJZFx1NjgzQ1x1NUYwRlxyXG4gICAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgICAvKiBWdWVEZXZUb29scyh7XHJcbiAgICAgICAgb3BlbkluRWRpdG9ySG9zdDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtlbnYuVklURV9BUFBfUE9SVH1gLFxyXG4gICAgICB9KSwgKi9cclxuICAgIF0sXHJcbiAgICAvLyBcdTk4ODRcdTUyQTBcdThGN0RcdTk4NzlcdTc2RUVcdTVGQzVcdTk3MDBcdTc2ODRcdTdFQzRcdTRFRjZcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgXCJ2dWVcIixcclxuICAgICAgICBcInZ1ZS1yb3V0ZXJcIixcclxuICAgICAgICBcInBpbmlhXCIsXHJcbiAgICAgICAgXCJheGlvc1wiLFxyXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCIsXHJcbiAgICAgICAgXCJzb3J0YWJsZWpzXCIsXHJcbiAgICAgICAgXCJwYXRoLXRvLXJlZ2V4cFwiLFxyXG4gICAgICAgIFwiZWNoYXJ0c1wiLFxyXG4gICAgICAgIFwiQHdhbmdlZGl0b3IvZWRpdG9yXCIsXHJcbiAgICAgICAgXCJAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZVwiLFxyXG4gICAgICAgIFwidnVlLWkxOG5cIixcclxuICAgICAgICBcInBhdGgtYnJvd3NlcmlmeVwiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZm9ybS9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2Zvcm0taXRlbS9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2J1dHRvbi9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2lucHV0L3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvc3dpdGNoL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdXBsb2FkL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbWVudS9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NvbC9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2ljb24vc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9yb3cvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90YWcvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kaWFsb2cvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9sb2FkaW5nL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvcmFkaW8vc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9yYWRpby1ncm91cC9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3BvcG92ZXIvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9zY3JvbGxiYXIvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90b29sdGlwL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZHJvcGRvd24vc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kcm9wZG93bi1tZW51L3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZHJvcGRvd24taXRlbS9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3N1Yi1tZW51L3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbWVudS1pdGVtL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZGl2aWRlci9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NhcmQvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9saW5rL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2JyZWFkY3J1bWItaXRlbS9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3RhYmxlL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdHJlZS1zZWxlY3Qvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90YWJsZS1jb2x1bW4vc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9zZWxlY3Qvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9vcHRpb24vc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdHJlZS9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2FsZXJ0L3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvY2hlY2tib3gtZ3JvdXAvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jaGVja2JveC9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3RhYnMvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90YWItcGFuZS9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3JhdGUvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kYXRlLXBpY2tlci9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2ltYWdlL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvc3RhdGlzdGljL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvd2F0ZXJtYXJrL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvY29uZmlnLXByb3ZpZGVyL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdGV4dC9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2RyYXdlci9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NvbG9yLXBpY2tlci9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2JhY2t0b3Avc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9tZXNzYWdlLWJveC9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3NrZWxldG9uL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvc2tlbGV0b24vc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9za2VsZXRvbi1pdGVtL3N0eWxlL2Nzc1wiLFxyXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvYmFkZ2Uvc3R5bGUvY3NzXCIsXHJcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9zdGVwcy9zdHlsZS9jc3NcIixcclxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3N0ZXAvc3R5bGUvY3NzXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgLy8gXHU2Nzg0XHU1RUZBXHU5MTREXHU3RjZFXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsIC8vIFx1NkQ4OFx1OTY2NFx1NjI1M1x1NTMwNVx1NTkyN1x1NUMwRlx1OEQ4NVx1OEZDNzUwMGtiXHU4QjY2XHU1NDRBXHJcbiAgICAgIG1pbmlmeTogXCJ0ZXJzZXJcIiwgLy8gVml0ZSAyLjYueCBcdTRFRTVcdTRFMEFcdTk3MDBcdTg5ODFcdTkxNERcdTdGNkUgbWluaWZ5OiBcInRlcnNlclwiLCB0ZXJzZXJPcHRpb25zIFx1NjI0RFx1ODBGRFx1NzUxRlx1NjU0OFxyXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsIC8vIFx1OTYzMlx1NkI2MiBJbmZpbml0eSBcdTg4QUJcdTUzOEJcdTdGMjlcdTYyMTAgMS8wXHVGRjBDXHU4RkQ5XHU1M0VGXHU4MEZEXHU0RjFBXHU1QkZDXHU4MUY0IENocm9tZSBcdTRFMEFcdTc2ODRcdTYwMjdcdTgwRkRcdTk1RUVcdTk4OThcclxuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSwgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGNvbnNvbGVcclxuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NTNCQlx1OTY2NCBkZWJ1Z2dlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICBjb21tZW50czogZmFsc2UsIC8vIFx1NTIyMFx1OTY2NFx1NkNFOFx1OTFDQVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIC8vIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgLy8gICBcInZ1ZS1pMThuXCI6IFtcInZ1ZS1pMThuXCJdLFxyXG4gICAgICAgICAgLy8gfSxcclxuICAgICAgICAgIC8vIFx1NzUyOFx1NEU4RVx1NEVDRVx1NTE2NVx1NTNFM1x1NzBCOVx1NTIxQlx1NUVGQVx1NzY4NFx1NTc1N1x1NzY4NFx1NjI1M1x1NTMwNVx1OEY5M1x1NTFGQVx1NjgzQ1x1NUYwRltuYW1lXVx1ODg2OFx1NzkzQVx1NjU4N1x1NEVGNlx1NTQwRCxbaGFzaF1cdTg4NjhcdTc5M0FcdThCRTVcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjloYXNoXHU1MDNDXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJqcy9bbmFtZV0uW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgICAvLyBcdTc1MjhcdTRFOEVcdTU0N0RcdTU0MERcdTRFRTNcdTc4MDFcdTYyQzZcdTUyMDZcdTY1RjZcdTUyMUJcdTVFRkFcdTc2ODRcdTUxNzFcdTRFQUJcdTU3NTdcdTc2ODRcdThGOTNcdTUxRkFcdTU0N0RcdTU0MERcclxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImpzL1tuYW1lXS5baGFzaF0uanNcIixcclxuICAgICAgICAgIC8vIFx1NzUyOFx1NEU4RVx1OEY5M1x1NTFGQVx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NzY4NFx1NTQ3RFx1NTQwRFx1RkYwQ1tleHRdXHU4ODY4XHU3OTNBXHU2NTg3XHU0RUY2XHU2MjY5XHU1QzU1XHU1NDBEXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBhc3NldEluZm8ubmFtZS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgIGxldCBleHRUeXBlID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnXHU2NTg3XHU0RUY2XHU0RkUxXHU2MDZGJywgYXNzZXRJbmZvLm5hbWUpXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAvXFwuKG1wNHx3ZWJtfG9nZ3xtcDN8d2F2fGZsYWN8YWFjKShcXD8uKik/JC9pLnRlc3QoYXNzZXRJbmZvLm5hbWUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGV4dFR5cGUgPSBcIm1lZGlhXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoL1xcLihwbmd8anBlP2d8Z2lmfHN2ZykoXFw/LiopPyQvLnRlc3QoYXNzZXRJbmZvLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgZXh0VHlwZSA9IFwiaW1nXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoL1xcLih3b2ZmMj98ZW90fHR0ZnxvdGYpKFxcPy4qKT8kL2kudGVzdChhc3NldEluZm8ubmFtZSkpIHtcclxuICAgICAgICAgICAgICBleHRUeXBlID0gXCJmb250c1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtleHRUeXBlfS9bbmFtZV0uW2hhc2hdLltleHRdYDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgX19BUFBfSU5GT19fOiBKU09OLnN0cmluZ2lmeShfX0FQUF9JTkZPX18pLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwgIntcbiAgXCJuYW1lXCI6IFwic2Fhc1wiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInZ1ZS10c2MgLS1ub0VtaXQgJiB2aXRlIGJ1aWxkXCIsXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXG4gICAgXCJidWlsZC1vbmx5XCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwidHlwZS1jaGVja1wiOiBcInZ1ZS10c2MgLS1ub0VtaXRcIixcbiAgICBcImxpbnQ6ZXNsaW50XCI6IFwiZXNsaW50ICAtLWZpeCAtLWV4dCAudHMsLmpzLC52dWUgLi9zcmMgXCIsXG4gICAgXCJsaW50OnByZXR0aWVyXCI6IFwicHJldHRpZXIgLS13cml0ZSBcXFwiKiovKi57anMsY2pzLHRzLGpzb24sdHN4LGNzcyxsZXNzLHNjc3MsdnVlLGh0bWwsbWR9XFxcIlwiLFxuICAgIFwibGludDpzdHlsZWxpbnRcIjogXCJzdHlsZWxpbnQgIFxcXCIqKi8qLntjc3Msc2Nzcyx2dWV9XFxcIiAtLWZpeFwiLFxuICAgIFwibGludDpsaW50LXN0YWdlZFwiOiBcImxpbnQtc3RhZ2VkXCIsXG4gICAgXCJwcmVpbnN0YWxsXCI6IFwibnB4IG9ubHktYWxsb3cgcG5wbVwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5XCIsXG4gICAgXCJjb21taXRcIjogXCJnaXQtY3pcIlxuICB9LFxuICBcImNvbmZpZ1wiOiB7XG4gICAgXCJjb21taXRpemVuXCI6IHtcbiAgICAgIFwicGF0aFwiOiBcIm5vZGVfbW9kdWxlcy9jei1naXRcIlxuICAgIH1cbiAgfSxcbiAgXCJsaW50LXN0YWdlZFwiOiB7XG4gICAgXCIqLntqcyx0c31cIjogW1xuICAgICAgXCJlc2xpbnQgLS1maXhcIixcbiAgICAgIFwicHJldHRpZXIgLS13cml0ZVwiXG4gICAgXSxcbiAgICBcIioue2Nqcyxqc29ufVwiOiBbXG4gICAgICBcInByZXR0aWVyIC0td3JpdGVcIlxuICAgIF0sXG4gICAgXCIqLnt2dWUsaHRtbH1cIjogW1xuICAgICAgXCJlc2xpbnQgLS1maXhcIixcbiAgICAgIFwicHJldHRpZXIgLS13cml0ZVwiLFxuICAgICAgXCJzdHlsZWxpbnQgLS1maXhcIlxuICAgIF0sXG4gICAgXCIqLntzY3NzLGNzc31cIjogW1xuICAgICAgXCJzdHlsZWxpbnQgLS1maXhcIixcbiAgICAgIFwicHJldHRpZXIgLS13cml0ZVwiXG4gICAgXSxcbiAgICBcIioubWRcIjogW1xuICAgICAgXCJwcmV0dGllciAtLXdyaXRlXCJcbiAgICBdXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBlbGVtZW50LXBsdXMvaWNvbnMtdnVlXCI6IFwiXjIuMy4xXCIsXG4gICAgXCJAa2pnbDc3L2RhdGF2LXZ1ZTNcIjogXCJeMS43LjNcIixcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcIl4xMC4xMS4wXCIsXG4gICAgXCJAd2FuZ2VkaXRvci9lZGl0b3JcIjogXCJeNS4xLjIzXCIsXG4gICAgXCJAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZVwiOiBcIjUuMS4xMFwiLFxuICAgIFwiYW5pbWF0ZS5jc3NcIjogXCJeNC4xLjFcIixcbiAgICBcImF4aW9zXCI6IFwiXjEuNy4zXCIsXG4gICAgXCJjb2RlbWlycm9yXCI6IFwiXjUuNjUuMTdcIixcbiAgICBcImNvZGVtaXJyb3ItZWRpdG9yLXZ1ZTNcIjogXCJeMi43LjBcIixcbiAgICBcImNvbG9yXCI6IFwiXjQuMi4zXCIsXG4gICAgXCJlY2hhcnRzXCI6IFwiXjUuNS4xXCIsXG4gICAgXCJlbGVtZW50LXBsdXNcIjogXCJeMi43LjhcIixcbiAgICBcImV4Y2VsanNcIjogXCJeNC40LjBcIixcbiAgICBcImxvZGFzaC1lc1wiOiBcIl40LjE3LjIxXCIsXG4gICAgXCJuZXRcIjogXCJeMS4wLjJcIixcbiAgICBcIm5wcm9ncmVzc1wiOiBcIl4wLjIuMFwiLFxuICAgIFwicGF0aC1icm93c2VyaWZ5XCI6IFwiXjEuMC4xXCIsXG4gICAgXCJwYXRoLXRvLXJlZ2V4cFwiOiBcIl42LjIuMlwiLFxuICAgIFwicGluaWFcIjogXCJeMi4yLjBcIixcbiAgICBcInFzXCI6IFwiXjYuMTMuMFwiLFxuICAgIFwic29ja2pzLWNsaWVudFwiOiBcIjEuNi4xXCIsXG4gICAgXCJzb3J0YWJsZWpzXCI6IFwiXjEuMTUuMlwiLFxuICAgIFwic3RvbXBqc1wiOiBcIl4yLjMuM1wiLFxuICAgIFwidnVlXCI6IFwiXjMuNC4zNVwiLFxuICAgIFwidnVlLWkxOG5cIjogXCI5LjkuMVwiLFxuICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjQuMlwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xOC42LjFcIixcbiAgICBcIkBjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxcIjogXCJeMTguNi4zXCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL2VwXCI6IFwiXjEuMS4xNVwiLFxuICAgIFwiQHR5cGVzL2NvZGVtaXJyb3JcIjogXCJeNS42MC4xNVwiLFxuICAgIFwiQHR5cGVzL2NvbG9yXCI6IFwiXjMuMC42XCIsXG4gICAgXCJAdHlwZXMvbG9kYXNoXCI6IFwiXjQuMTcuN1wiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTQuMTRcIixcbiAgICBcIkB0eXBlcy9ucHJvZ3Jlc3NcIjogXCJeMC4yLjNcIixcbiAgICBcIkB0eXBlcy9wYXRoLWJyb3dzZXJpZnlcIjogXCJeMS4wLjJcIixcbiAgICBcIkB0eXBlcy9xc1wiOiBcIl42LjkuMTVcIixcbiAgICBcIkB0eXBlcy9zb2NranMtY2xpZW50XCI6IFwiXjEuNS40XCIsXG4gICAgXCJAdHlwZXMvc29ydGFibGVqc1wiOiBcIl4xLjE1LjhcIixcbiAgICBcIkB0eXBlcy9zdG9tcGpzXCI6IFwiXjIuMy45XCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl43LjE4LjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy4xOC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4xLjJcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeMy4xLjBcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjIwXCIsXG4gICAgXCJjb21taXRpemVuXCI6IFwiXjQuMy4wXCIsXG4gICAgXCJjei1naXRcIjogXCJeMS45LjRcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjkuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjIuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi12dWVcIjogXCJeOS4yNy4wXCIsXG4gICAgXCJmYXN0LWdsb2JcIjogXCJeMy4zLjJcIixcbiAgICBcImh1c2t5XCI6IFwiXjkuMS40XCIsXG4gICAgXCJsZXNzXCI6IFwiXjQuMi4wXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjhcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjQwXCIsXG4gICAgXCJwb3N0Y3NzLWh0bWxcIjogXCJeMS43LjBcIixcbiAgICBcInBvc3Rjc3Mtc2Nzc1wiOiBcIl40LjAuOVwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4zLjNcIixcbiAgICBcInNhc3NcIjogXCJeMS43Ny44XCIsXG4gICAgXCJzdHlsZWxpbnRcIjogXCJeMTYuOC4xXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLWh0bWxcIjogXCJeMS4xLjBcIixcbiAgICBcInN0eWxlbGludC1jb25maWctcmVjZXNzLW9yZGVyXCI6IFwiXjQuNi4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXNjc3NcIjogXCJeMTQuMS4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXZ1ZVwiOiBcIl4xLjUuMFwiLFxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4zNi4wLjFcIixcbiAgICBcInRlcnNlclwiOiBcIl41LjMxLjNcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS41LjRcIixcbiAgICBcInVub2Nzc1wiOiBcIl4wLjU4LjlcIixcbiAgICBcInVucGx1Z2luLWF1dG8taW1wb3J0XCI6IFwiXjAuMTcuOFwiLFxuICAgIFwidW5wbHVnaW4taWNvbnNcIjogXCJeMC4xOC41XCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI2LjBcIixcbiAgICBcInZpdGVcIjogXCJeNS4zLjVcIixcbiAgICBcInZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlclwiOiBcIl4xLjYuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjogXCJeNy4zLjdcIixcbiAgICBcInZ1ZS10c2NcIjogXCJeMi4wLjI5XCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRlZS5jb20veW91bGFpb3JnL3Z1ZTMtZWxlbWVudC1hZG1pbi5naXRcIixcbiAgXCJhdXRob3JcIjogXCJcdTY3MDlcdTY3NjVcdTVGMDBcdTZFOTBcdTdFQzRcdTdFQzdcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiZW5naW5l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
