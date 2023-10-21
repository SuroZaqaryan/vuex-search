import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Page1",
      component: () => import("./components/Page1")
    },
    {
      path: "/update",
      name: "Page2",
      component: () => import("./components/Page2")
    }
  ]
});

export default router;
