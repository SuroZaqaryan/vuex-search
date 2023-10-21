import Vue from "vue";
import Vuex from "vuex";

import PostsModule from "./modules/PostsModule";
import AlbumModule from "./modules/AlbumModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PostsModule,
    AlbumModule
  }
});
