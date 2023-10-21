<template>
  <div id="app">
    <Search />
    <router-view></router-view>
  </div>
</template>

<script>
import Search from "./components/Search.vue";

export default {
  name: "App",

  components: {
    Search
  }
};
</script>

<style>
body {
  background: gray;
}

#app {
  max-width: 1200px;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
