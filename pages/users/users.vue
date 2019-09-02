<template>
  <v-list>
    <v-subheader>Сортировка</v-subheader>

    <v-list-item-group color="primary">
      <v-list-item>
        <v-btn @click="sortName()" flat small color="primary">По фамилии</v-btn>
        <v-btn flat small color="primary">Объектов Всего</v-btn>
        <v-btn flat small color="primary">Объектов Сдано</v-btn>
      </v-list-item>
      <v-list-item v-for="(user, i) in users" :key="i" @click="openUser(user)">
        <v-list-item-avatar>
          <v-img :src="user.photo	"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{user.firstname}} {{user.lastname}}</v-list-item-title>
          <v-list-item-subtitle>{{logoutTime(user.sessions[0].timeLogout)}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import moment from "moment";

export default {
  middleware: ["auth"],
  fetch({ store }) {
    if (store.getters["users/getUsers"].length === 0) {
      store.dispatch("users/fetch");
    }
  },
  computed: {
    ...mapGetters({
      users: "users/getUsers",
      userOnline: "users/getUserOnline"
    })
  },
  methods: {
		...mapMutations({ sortName: "users/sortName" }),
    openUser(user) {
      console.log(user.uid);
      this.$router.push("/users/" + user.uid);
    },
    logoutTime(time) {
      return this.$moment(+time).fromNow();
    }
  }
};
</script>


