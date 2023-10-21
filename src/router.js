import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/posts",
      name: "PostsPage",
      component: () => import("./pages/PostsPage")
    },
    {
      path: "/albums",
      name: "AlbumsPage",
      component: () => import("./pages/AlbumsPage")
    }
  ]
});

export default router;
