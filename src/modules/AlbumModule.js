export default {
  namespaced: true,

  state: {
    albums: []
  },

  actions: {
    async fetchAlbums({ commit }) {
      await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((data) => commit("setAlbums", data));
    }
  },

  mutations: {
    setAlbums(state, albums) {
      state.albums = albums;
    }
  }
};
