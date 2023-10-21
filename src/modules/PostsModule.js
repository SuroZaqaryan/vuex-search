export default {
  namespaced: true,

  state: {
    posts: []
  },

  actions: {
    async fetchPosts({ commit }) {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => commit("setPosts", data));
    }
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  }
};
