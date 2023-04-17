import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 打包配置
  build: {
    outDir: "dist", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.js"), //指定组件编译入口文件
      name: "mobile-table",
      formats: ["umd"],
      fileName: (format, entryName) => {
        return `${entryName}.${format}.js`;
      },
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: "vue",
      },
    }, // rollup打包配置
  },
});
