import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"], // 自动导入vue和vue-router相关函数
      dts: "src/types/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
    }),
  ],
});
