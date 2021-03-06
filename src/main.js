import Vue from "vue";
import Buefy from "buefy";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// Global Vue configuration
// - https://vuejs.org/v2/api/#Global-Config
Vue.config.productionTip = false;

// Configure Buefy
// - https://buefy.github.io/#/documentation/constructor-options
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
