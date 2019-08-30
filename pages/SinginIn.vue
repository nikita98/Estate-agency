<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col md="5" sm="8" xs="12">
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>Вход</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" :rules="passwordRules" label="Пароль" required></v-text-field>
              <v-btn :disabled="!valid" color="success" type="submit">Войти</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mask } from "vue-the-mask";

export default {
  directives: {
    mask
  },
  data: () => ({
    mask: "+7 (###) ### ## ##",
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "Введите E-mail",
      v => /.+@.+\..+/.test(v) || "Неверный E-mail"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Введите пароль",
      v => (v && v.length >= 8) || "Пароль слишком короткий"
    ]
  }),

  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log("123");
        this.$store.commit("users/addUser", {
          uid: 1,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          isAdmin: this.isAdmin
        });
      }
      console.log(this.$store["users/users"]);
      console.log(this.$store.getters["users/users"]);
    }
  }
};
</script>>
<style>
</style>