<template>
  <v-container grid-list-xs>
    <v-subheader v-if="userNow">
      Объекты пользователя: {{ userNow.firstname }}{{ userNow.lastname }}
    </v-subheader>
    <v-row justify="center">
      <v-col sm="12" xs="12">
        <v-list>
          <v-list-item-group color="primary">
            <div v-if="!objects">
              Объектов нет
            </div>
            <v-list-item v-for="(object, i) in objects" :key="i">
              <v-row cols="12">
                <v-col cols="8">
                  <v-flex>
                    <span v-for="(photo, j) in object.photos" :key="j">
                      <img :src="photo.image">
                      <span>  </span>
                    </span>
                  </v-flex>
                  <div v-if="!userNow">
                    Имя юзера: {{ name(object.ownerId) }}
                  </div>
                  <div v-if="object.sold" color="red">
                    Продано
                  </div>
                  <div v-if="!object.sold" color="green">
                    В продаже
                  </div>
                  <div>{{ object.type }}</div>
                  <div> Площадь: {{ object.area }}</div>
                  <div v-if="object.type === 'Аппартаменты'" style="width: 100%; padding: 20px" class="indigo darken-1 full">
                    <div>Площадь кухни: {{ object.kitchenArea }}</div>
                    <div v-if="object.rooms === 0">
                      Комната студия
                    </div>
                    <div v-if="object.rooms !== 0">
                      Комнат: {{ object.rooms }}
                    </div>
                    <div>Этаж: {{ object.floor }}</div>
                    <div>Всего этажейтаж: {{ object.allFloor }}</div>
                    <div>Тип парковки: {{ object.parking }}</div>
                    <div>Год постройки: {{ object.buildYead }}</div>
                    <div>Лифт: {{ object.elevator }}</div>
                    <div>Тип стен: {{ object.walls }}</div>
                    <div>Отделка: {{ object.facing }}</div>
                    <div v-if="object.bathroom">
                      Санузел: совмещённый
                    </div>
                    <div v-if="!object.rooms">
                      Санузел: раздельный
                    </div>
                    <div v-if="object.loggia === 0">
                      Без балкона
                    </div>
                    <div v-if="object.loggia === 1">
                      С балконом
                    </div>
                    <div v-if="object.loggia === 2">
                      С лоджией
                    </div>
                  </div>
                  <div v-if="object.type === 'Гараж'" style="width: 100%; padding: 20px" class="indigo darken-1 full">
                    <div v-if="object.basement === 0">
                      Есть подвал
                    </div>
                    <div v-if="object.basement !== 0">
                      Нет подвала
                    </div>
                    <div v-if="object.heating === 0">
                      Есть отопление
                    </div>
                    <div v-if="object.heating !== 0">
                      Нет отопления
                    </div>
                  </div>
                  <div class="deep-purple" style="width: 100%; padding: 20px">
                    <div>Данные владельца:</div>
                    <br>
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
      getUserObjects: 'objects/getUserObjects',
      getObjects: 'objects/getObjects',
      getUsers: 'users/getUsers',
      getUserById: 'users/getUserById'
    }),
    params () {
      return (this.$route.params.uid === 'all') ? null : this.$route.params.uid
    },
    userNow () {
      if (this.$route.params.uid !== undefined) {
        return this.getUserById(this.params)
      }
      return false
    },
    objects () {
      if (this.params) {
        return this.getUserObjects(this.params)
      } else {
        return this.getObjects
      }
    }
  },
  methods: {
    // ...mapGetters({
    //   getUserById: 'users/getUserById'
    // }),
    timeFromNow (time) {
      return this.$moment(time).fromNow()
    },
    name (uid) {
      const user = this.getUserById(uid)
      return user.firstname + ' ' + user.lastname
    }
  }
}
</script>
