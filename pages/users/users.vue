<template>
  <v-list>
    <v-subheader>REPORTS</v-subheader>
    <v-list-item-group color="primary">
      <v-list-item v-for="(user, i) in users" :key="i" @click="openUser(user)">
        <v-list-item-avatar>
          <v-img :src="user.photo	"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>
          <v-list-item-subtitle class v-html="user.lastlogin"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	middleware: ['auth'],
  fetch({ store }) {
    if (store.getters["users/getUsers"].length === 0) {
      store.dispatch("users/fetch");
    }
  },
  computed: {
    ...mapGetters({ users: "users/getUsers" })
  },
  methods: {
    openUser(user) {
			console.log(user.uid);
      this.$router.push("/users/" + user.uid);
    }
  }
};
</script>


