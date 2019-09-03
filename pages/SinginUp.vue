<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col md="5" sm="8" xs="12">
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
              <v-text-field v-model="firstname" :rules="nameRules" label="Имя" required />
              <v-text-field v-model="lastname" :rules="nameRules" label="Фамилия" required />
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required />
              <v-text-field
                v-model="phone"
                v-mask="mask"
                :rules="phoneRules"
                label="Телефон"
                required
              />
              <v-text-field v-model="password" :rules="passwordRules" label="Пароль" type="password" required />
              <v-checkbox v-model="isAdmin" label="Вы админ, да?" required />
              <v-btn :disabled="!valid" color="success" type="submit">
                Зарегестрироваться
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-text class="title">
            <nuxt-link to="/SinginIn">
              Вход
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: {
    mask
  },
  data: () => ({
    mask: '+7 (###) ### ## ##',
    valid: true,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Введите имя',
      v => (v && v.length >= 3) || 'Имя слишком короткое'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Введите E-mail',
      v => /.+@.+\..+/.test(v) || 'Неверный E-mail'
    ],
    phone: '+7 (',
    phoneRules: [
      v => !!v || 'Введите телефон',
      v => (v && v.length >= 18) || 'Введите номер полностью'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Введите пароль',
      v => (v && v.length >= 8) || 'Пароль слишком короткий'
    ],
    isAdmin: false
  }),

  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        this.$store.commit('users/addUser', {
          uid: 1,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          password: this.password,
          isAdmin: this.isAdmin
        })
        this.$router.push('/SinginIn')
      }
    }
  }
}
</script>>
<style>
</style>
