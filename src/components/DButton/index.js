import DButton from "./DButton.vue";

export const ButtonPlugin = {
  install(app){
    app.component("DButton", DButton);
  },
};
export { DButton };
