import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import Single from "@/components/Single";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage
    },
    {
        path: "/story/:id",
        name: "Single",
        component: Single
        }
  ]
});