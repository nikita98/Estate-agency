<template>
  <v-list>
    <v-subheader>REPORTS</v-subheader>
    <v-list-item-group color="primary">
      <v-list-item v-for="(user, i) in users" :key="i" @click="openUser(user)">
        <v-list-item-avatar>
          <v-img :src="user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="user.firstname"></v-list-item-title>
          <v-list-item-subtitle class v-html="user.lastlogin"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    }
  },
  methods: {
    openUser(user) {
      this.$router.push("/users/" + user.uid);
    }
  }
};
</script>


