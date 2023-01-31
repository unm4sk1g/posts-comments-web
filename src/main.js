import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import axiosPlugin from "./plugins/axios";
Vue.config.productionTip = false;
Vue.use(axiosPlugin);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
