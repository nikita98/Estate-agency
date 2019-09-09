<template>
  <section>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3>{{ user.firstname }} {{ user.lastname }}</h3>
          <div v-if="user.isAdmin">
            Администратор
          </div>
        </div>
      </v-card-title>
      <v-card-text>
        <img :src="user.photo" alt="avatar">
        <div>
          <a
            :href="'mailto:' + user.email"
          >
            Email: {{ user.email }}
          </a>
        </div>
        <div>
          <a
            :href="'tel:' + user.phone"
          >
            Телефон: {{ user.phone }}
          </a>
        </div>
        <div>
          <a
            href="#"
            @click="openUserObjects(user)"
          >
            Всего объектов: {{ user.objects }}
          </a>
        </div>
        <div>Продано объектов : {{ user.soldObject }}</div>
        <div>Был онлайн: {{ timeFromNow(user.lastlogin) }}</div>
        <v-btn
          v-if="user == userNow"
          to="/objects/add-object"
        >
          Добавить объект
        </v-btn>
      </v-card-text>
    </v-card>
    <hr>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ users: 'users/getUsers', userId: 'users/getUserById', userNow: 'auth/getUserNow' }),
    user () {
      return this.userId(this.par)
    },
    par () {
      return this.$route.params.uid
    }
  },
  methods: {
    timeFromNow (time) {
      return this.$moment(time).fromNow()
    },
    openUserObjects (user) {
      this.$router.push('/objects/' + user.uid)
    }
  }
}
</script>
