import { DButton, ButtonPlugin } from "./components/DButton";
import { HelloWorld, HelloWorldPlugin } from "./components/HelloWorld";

const componPlugin = [ButtonPlugin, HelloWorldPlugin];

const install = function (app) {
  componPlugin.map((comItem) => comItem.install?.(app));
};

export { install, DButton, HelloWorld }; // 按需加载
export default install; // 全量加载
