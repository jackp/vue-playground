import Vue from "vue";
import Router from "vue-router";
import Home from "./components/pages/Home.vue";
import Routing from "./components/pages/Routing.vue";
import RoutingBasic from "./components/pages/RoutingBasic.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active", // Apply Bulma styles
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/routing",
      component: Routing,
      children: [
        {
          path: "",
          component: RoutingBasic
        }
      ]
    }
  ]
});
