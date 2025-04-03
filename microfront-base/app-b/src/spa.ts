import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";

// Vueアプリケーションのオプション
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {});
    },
  },
  handleInstance: (app, props) => {
    // シェルアプリからのpropsをVueアプリに渡す
    app.config.globalProperties.$data = { props: props };
  },
});

// single-spaライフサイクル関数をエクスポート
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
