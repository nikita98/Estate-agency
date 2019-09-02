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
        <div>Был онлайн: {{timeNow}}</div>
				<div>{{time2}}</div>
				<div>{{userid2}}</div>
      </v-card-text>
    </v-card>
    <hr />
  </section>
</template>

<script>

import moment from 'moment';

import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ users: "users/getUsers",  userId: "users/getUserById" }),
    user() {
      return this.users[this.$route.params.uid];
    },
    par() {
      return this.$route.params.uid;
    },
    timeNow() {
      return this.$moment(1566500009000).fromNow();
		},
		time2() {
			return new Date().getTime();
		},
		userid2() {
			return this.userId(0);
		}
  }
};
</script>