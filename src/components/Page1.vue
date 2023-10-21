<template>
  <div>
    <h2>Users</h2>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-card">
        <div class="user-info">
          <h3>{{ user.name }}</h3>
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
        </div>
        <div class="user-address">
          <h4>Address</h4>
          <p>{{ user.address.street }}, {{ user.address.suite }}</p>
          <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async mounted() {
    await this.$store.dispatch("Page1/fetchUsers");
  },

  computed: {
    users() {
      return this.$store.state.Page1.users;
    },
  },
};
</script>

<style>
.user-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.user-card {
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
}

.user-info {
  padding: 10px;
}

.user-info h3 {
  margin: 0;
}

.user-address h4 {
  margin-top: 10px;
}
</style>
