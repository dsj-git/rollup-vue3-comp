// 处理vue文件插件
import vue from "rollup-plugin-vue";
// 处理css文件插件
import postcss from "rollup-plugin-postcss";
import autoprefixer from 'autoprefixer';
// 用于在节点单元模块中使用第三方模块
import { nodeResolve } from "@rollup/plugin-node-resolve";
import packageJson from "./package.json" assert { type: "json" };
const name = packageJson.name;
// 输出打包后的文件名称type 1.esm 2.umd
const file = (type) => `dist/${name}.${type}.js`;
const overrides = {
  compilerOptions: { declaration: true }, // 生成.d.ts的文件
  exclude: ["tests/**/*.ts", "tests/**/*.vue"],
};
export { name, file };
export default {
  input: "src/index.js",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [
    nodeResolve(),
    vue(),
    postcss({
      plugins: [
        autoprefixer(),
      ],
      minimize: true, // 压缩 css,
      extract: "bundle.css" // 可自行修改output文件名
    }), 
  ],
  external: ["vue", /\.css$/], // 规定哪些是外部引用的模块
};
