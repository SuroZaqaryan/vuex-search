export default {
  namespaced: true,

  state: {
    users: []
  },

  actions: {
    async fetchUsers({ commit }) {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => commit("setUsers", data));
    }
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  }
};
