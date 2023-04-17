import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.js"), //指定组件编译入口文件
      name: "mobile-table",
      formats: ["es", "umd"],
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
