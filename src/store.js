import Vue from "vue";
import Vuex from "vuex";

import PostsModule from "./modules/PostsModule";
import AlbumModule from "./modules/AlbumModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: ""
  },

  actions: {
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    },
  },

  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },

  modules: {
    PostsModule,
    AlbumModule
  }
});
