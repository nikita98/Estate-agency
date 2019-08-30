<template>
  <section>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3>{{users.firstname}} {{users.lastname}}</h3>
          <div v-if="users.isAdmin">Администратор</div>
        </div>
      </v-card-title>
      <v-card-text>
        <img :src="users.photo" alt="avatar" />
        <div>Email: {{users.email}}</div>
        <div>Телефон: {{users.phone}}</div>
        <div>Всего объектов: {{users.objects}}</div>
        <div>Продано объектов : {{users.soldObject}}</div>
        <div>Был онлайн: {{users.lastlogin}}</div>
      </v-card-text>
    </v-card>
    <hr />
  </section>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters["users/users"][this.$route.params.uid];
    },
    par() {
      return this.$route.params.uid;
    }
  }
};
</script>