import Vue from "vue";
import Vuex from "vuex";

import Page1 from "./modules/Page1";
import Page2 from "./modules/Page2";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Page1,
    Page2
  }
});
