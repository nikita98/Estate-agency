<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col md="5" sm="8" xs="12">
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>Вход</v-toolbar-title>
          </v-toolbar>
          <v-alert v-if="error" type="error">
            Неправильный лигин или пароль
          </v-alert>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required />
              <v-text-field v-model="password" :rules="passwordRules" label="Пароль" required />
              <v-btn :disabled="!valid" color="success" type="submit">
                Войти
              </v-btn>
            </v-form>
          </v-card-text>
          <br>
          <v-card-text class="title">
            <nuxt-link to="/SinginUp">
              Регистрация
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mask } from 'vue-the-mask'
import { mapGetters, mapActions } from 'vuex'

export default {
  directives: {
    mask
  },
  data: () => ({
    error: '',
    userNow: '',
    mask: '+7 (###) ### ## ##',
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'Введите E-mail',
      v => /.+@.+\..+/.test(v) || 'Неверный E-mail'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Введите пароль',
      v => (v && v.length >= 8) || 'Пароль слишком короткий'
    ]
  }),
  computed: mapGetters({ users: 'users/getUsers' }),
  methods: {
    ...mapActions({ login: 'auth/login' }),
    onSubmit () {
      if (this.$refs.form.validate()) {
        const email = this.email
        const password = this.password

        this.userNow = this.users.filter(function (user) {
          if (user.email === email && user.password === password) {
            return user
          }
        })
        if (this.userNow.length) {
          const userNow = this.userNow
          this.login(userNow)
          this.$router.push('/')
        } else {
          this.error = true
        }
      }
    }
  }
}
</script>>
<style>
</style>
