<script>
export default {
  watch: { 
  '$route': {
      handler() {
        if(this.searchQuery.length) {
          this.$store.commit('setSearchQuery', '');
        }
      }
    }
  },

  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },

      set(query) {
        this.$store.commit('setSearchQuery', query);
      },
    },
  },
}
</script>

<template>
  <div class="search-container">
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Search..." 
      class="search"
    >

    <div class="btns">
      <button @click="$router.push('posts')">Posts</button>
      <button @click="$router.push('albums')">Albums</button>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  max-width: 600px;
  margin: auto;
}
.search {
  width: 100%;
  height: 50px;
  border-radius: 13px;
  padding: 0 8px;
  border: none;
  font-size: 18px;
  outline: none;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
}

button {
  padding: 10px 24px;
  background-color: #413aa3; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 3px;
  cursor: pointer;
}
</style>