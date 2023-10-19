<script>
export default {
  async mounted() {
    await this.$store.dispatch("AlbumModule/fetchAlbums");
  },

  computed: {
    albums() {
      return this.$store.state.AlbumModule.albums.filter((album) =>
        album.title.toLowerCase().includes(this.$store.state.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <div>
    <h2 class="title">Albums</h2>
    
    <ul class="album-list">
      <li v-for="album in albums" :key="album.id" class="album-card">
        <div class="album-info">
          <h3>{{ album.title }}</h3>
        </div>
        <div class="album-user">
          <p><strong>User ID:</strong> {{ album.userId }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  margin: 23px 0;
  font-weight: bold;
  color: #fff;
  border-bottom: 1px solid;
}

.album-list {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill,minmax(254px,1fr));
  list-style: none;
  padding: 0;
}

.album-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
}

.album-info {
  padding: 10px;
}

.album-info h3 {
  margin: 0;
}

.album-user p {
  margin: 0;
}
</style>