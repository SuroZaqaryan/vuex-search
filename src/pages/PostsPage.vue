<script>
export default {
  async mounted() {
    await this.$store.dispatch("PostsModule/fetchPosts");
  },

  computed: {
    posts() {
      return this.$store.state.PostsModule.posts;
    },
  },
};
</script>

<template>
  <div>
    <h2 class="title">Posts</h2>
    
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-card">
        <div class="post-info">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
        <div class="post-user">
          <p><strong>User ID:</strong> {{ post.userId }}</p>
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
.post-list {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill,minmax(254px,1fr));
  list-style: none;
  padding: 0;
}

.post-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
}

.post-info {
  padding: 10px;
}

.post-info h3 {
  margin: 0;
}

.post-user p {
  margin: 0;
}
</style>
