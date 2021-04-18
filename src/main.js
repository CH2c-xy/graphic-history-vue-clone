import Vue from "vue";
import App from "./App.vue";


import "@/assets/css/font.css";
import "@/assets/css/tailwind.css";
import 'fullpage.js/dist/fullpage.css';

import 'fullpage.js/vendors/scrolloverflow';

import VueFullPage from "vue-fullpage.js";

Vue.use(VueFullPage);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
