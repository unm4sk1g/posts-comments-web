import axios from "axios";

export default {
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });
  },
};
