<template>
  <section>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3>{{user.firstname}} {{user.lastname}}</h3>
          <div v-if="user.isAdmin">Администратор</div>
        </div>
      </v-card-title>
      <v-card-text>
        <img :src="user.photo" alt="avatar" />
        <div>Email: {{user.email}}</div>
        <div>Телефон: {{user.phone}}</div>
        <div>Всего объектов: {{user.objects}}</div>
        <div>Продано объектов : {{user.soldObject}}</div>
        <div>Был онлайн: {{user.lastlogin}}</div>
      </v-card-text>
    </v-card>
    <hr />
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	middleware: ['auth'],
	computed: {
		...mapGetters({users: "users/getUsers"}),
		user() {
      return this.users[this.$route.params.uid];
    },
		par() {
      return this.$route.params.uid;
		}
	}
}
</script>