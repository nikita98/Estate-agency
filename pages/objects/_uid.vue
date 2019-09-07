<template>
  <v-container grid-list-xs>
    <v-subheader v-if="user">
      Объекты пользователя: {{ user.firstname }}{{ user.lastname }}
    </v-subheader>
    <v-row justify="center">
      <v-col sm="12" xs="12">
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(object, i) in objects" :key="i">
              <v-row cols="12">
                <v-col cols="8">
                  <v-flex>
                    <v-for v-for="(photo, j) in object.photos" :key="j">
                      <img :src="photo.image">
                    </v-for>
                  </v-flex>
                  <div v-if="object.sold" color="red">
                    Продано
                  </div>
                  <div v-if="!object.sold" color="green">
                    В продаже
                  </div>
                  <div>{{ object.type }}</div>
                  <div> Площадь: {{ object.аrea }}</div>
                  <div>
                    <br>
                    Данные пользователя:
                    <div>
                      {{ object.holder.name }}
                    </div>
                    <div>
                      {{ object.holder.phone }}
                    </div>
                    <div>
                      {{ object.holder.email }}
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth'],
  computed: {
    ...mapGetters({
      getObjects: 'objects/getUserObjects',
      users: 'users/getUsers'
    }),
    user () {
      if (this.$route.params.uid !== undefined) {
        return this.users[this.$route.params.uid]
      }
      return false
    },
    objects () {
      return this.getObjects(this.$route.params.uid)
    }
  },
  methods: {
    timeFromNow (time) {
      return this.$moment(time).fromNow()
    }
  }
}
</script>
