import HelloWorld from "./HelloWorld.vue";

export const HelloWorldPlugin = {
  install(app) {
    app.component("HelloWorld", HelloWorld);
  },
};
export { HelloWorld };
