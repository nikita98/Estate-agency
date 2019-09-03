<template>
  <v-list>
    <v-subheader>Сортировка</v-subheader>

    <v-list-item-group color="primary">
      <v-list-item>
        <v-btn small color="primary" @click="sortName()">
          По фамилии
        </v-btn>
        <v-btn small color="primary" @click="sortOnline()">
          Онлайн
        </v-btn>
        <v-btn small color="primary" @click="sortObject()">
          Объектов всего
        </v-btn>
        <v-btn small color="primary" @click="sortSoldObject()">
          Объектов продано
        </v-btn>
      </v-list-item>
      <v-list-item v-for="(user, i) in users" :key="i" @click="openUser(user)">
        <v-list-item-avatar>
          <v-img :src="user.photo" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ user.firstname }} {{ user.lastname }}</v-list-item-title>
          <v-list-item-subtitle>{{ timeFromNow(user.lastlogin) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  middleware: ['auth'],
  computed: {
    ...mapGetters({
      users: 'users/getUsers',
      userOnline: 'users/getUserOnline'
    })
  },
  fetch ({ store }) {
    if (store.getters['users/getUsers'].length === 0) {
      store.dispatch('users/fetch')
    }
  },
  methods: {
    ...mapMutations({
      sortName: 'users/sortName',
      sortOnline: 'users/sortOnline',
      sortObject: 'users/sortObject',
      sortSoldObject: 'users/sortSoldObject'
    }),
    openUser (user) {
      this.$router.push('/users/' + user.uid)
    },
    timeFromNow (time) {
      return this.$moment(time).fromNow()
    }
  }
}
</script>
