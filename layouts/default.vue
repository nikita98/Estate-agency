<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <!-- <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Стартовая страница</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userNow !== null" to="/" @click="toUserNow">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Моя страница</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="adminCheck" to="/users/users">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Работники</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="adminCheck" to="/objects/all">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Объекты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userNow === null" to="/SinginUp">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Регистрация</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userNow === null" to="/SinginIn">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Вход</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userNow !== null" @click="logout">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-account-tie',
          title: 'Регистрация',
          to: '/SinginUp'
        },
        {
          icon: 'mdi-account-tie',
          title: 'Вход',
          to: '/SinginIn'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapGetters({ userNow: 'auth/getUserNow' }),
    adminCheck () {
      if ((this.userNow) && this.userNow.isAdmin === true) {
        return true
      }
      return false
    }
  },
  methods: {
    ...mapMutations({ logout: 'auth/clearUserNow' }),
    toUserNow () {
      this.$router.push('/users/' + this.userNow.uid)
    }
  }
}
</script>
