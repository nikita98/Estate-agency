<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col md="5" sm="8" xs="12">
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>Добавить объект</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
              <v-btn>
                Добавить изображение
              </v-btn>
              <v-text-field
                v-model="area"
                :rules="fractionalRules"
                suffix="Метров²"
                label="Площадь"
                type="number"
                required
              />
              <v-checkbox v-model="sold" label="Уже продали?" required />
              <v-overflow-btn
                v-model="type"
                required
                :items="types"
                label="Тип"
              />
              <div v-if="type === 'Гараж'" style="width: 100%; padding: 20px" class="indigo darken-1 deep-purple full">
                <v-checkbox
                  v-model="garage.basement"
                  label="Есть подвал?"
                  required
                />
                <v-checkbox
                  v-model="garage.heating"
                  label="Есть отопление?"
                  required
                />
              </div>
              <div v-if="type === 'Аппартаменты'" style="width: 100%; padding: 20px" class="indigo darken-1 full">
                <v-text-field
                  v-model="apartment.kitchenArea"
                  :rules="fractionalRules"
                  suffix="Метров²"
                  label="Площадь кухни"
                  type="number"
                  required
                />
                <v-checkbox v-model="apartment.studio" label="Квартира - студия?" required />
                <v-text-field
                  v-if="apartment.studio !== true"
                  v-model="apartment.rooms"
                  :rules="integerRules"
                  label="Количество комнат"
                  type="number"
                  required
                />
                <v-text-field v-model="apartment.floor" :rules="integerRules" label="Этаж" type="number" required />
                <v-text-field v-model="apartment.allFloor" :rules="integerRules" label="Всего этажей" type="number" required />
                <v-text-field v-model="apartment.parking" label="Тип парковки" required />
                <v-text-field v-model="apartment.buildYead" :rules="integerRules" label="Год постройки" type="number" required />
                <v-checkbox v-model="apartment.elevator" label="Есть лифт?" required />
                <v-text-field v-model="apartment.walls" label="Тип стен" required />
                <v-text-field v-model="apartment.facing" label="Отделка" required />
                <v-checkbox v-model="apartment.bathroom" label="Совмещённый санузел?" required />
                <v-overflow-btn
                  v-model="apartment.loggia"
                  required
                  :items="apartment.loggias"
                  label="Балкон"
                />
              </div>
              <div style="width: 100%; padding: 20px" class="deep-purple">
                <v-card-text>
                  <h2>Данные владельца недвижимости</h2>
                  <v-text-field v-model="holder.name" :rules="nameRules" label="Полное имя" required />
                  <v-text-field v-model="holder.email" :rules="emailRules" label="E-mail" required />
                  <v-text-field
                    v-model="holder.phone"
                    v-mask="mask"
                    :rules="phoneRules"
                    label="Телефон"
                    required
                  />
                </v-card-text>
              </div>
              <v-btn :disabled="!valid" color="success" type="submit">
                Добавить
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { mask } from 'vue-the-mask'

export default {
  directives: {
    mask
  },
  data: () => ({
    mask: '+7 (###) ### ## ##',
    types: ['Гараж', 'Аппартаменты'],
    valid: true,
    sold: false,
    area: null,
    type: 'Аппартаменты',
    holder: {
      name: '',
      email: '',
      phone: '+7 ('
    },
    garage: {
      basement: true,
      heating: true
    },
    apartment: {
      loggias: ['Нет', 'Балкон', 'Лоджия'],
      kitchenArea: null,
      studio: false,
      rooms: null,
      floor: null,
      allFloor: null,
      parking: 'Нет',
      buildYead: 2000,
      elevator: false,
      walls: '',
      facing: '',
      bathroom: true,
      loggia: 0
    },
    nameRules: [
      v => !!v || 'Введите имя',
      v => (v && v.length >= 3) || 'Имя слишком короткое'
    ],
    emailRules: [
      v => !!v || 'Введите E-mail',
      v => /.+@.+\..+/.test(v) || 'Неверный E-mail'
    ],
    phoneRules: [
      v => !!v || 'Введите телефон',
      v => (v && v.length >= 18) || 'Введите номер полностью'
    ],
    integerRules: [
      v => !!v || 'Заполните поле',
      v => v > 0 || 'Мало',
      v => /[0-9]/.test(v) || 'Неправильные данные'
    ],
    fractionalRules: [
      v => !!v || 'Заполните поле',
      v => v > 0 || 'Мало',
      v => /\d/.test(v) || 'Неправильные данные'
    ]
  }),
  computed: {
    ...mapGetters({ getUserNow: 'auth/getUserNow' })
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const obg = {
          id: this.guidGenerator(),
          name: this.name,
          ownerId: this.getUserNow.uid,
          holder: {
            name: this.holder.name,
            phone: this.holder.phone,
            email: this.holder.email
          },
          createdAt: Date.now(),
          sold: this.sold,
          type: this.type,
          area: this.area
        }
        switch (this.type) {
          case 'Гараж':
            obg.basement = this.garage.basement
            obg.heating = this.garage.heating
            break
          case 'Аппартаменты':
            obg.kitchenArea = this.apartment.kitchenArea
            obg.studio = this.apartment.studio
            obg.rooms = this.apartment.studio ? this.studio : this.rooms
            obg.floor = this.apartment.floor
            obg.allFloor = this.apartment.allFloor
            obg.parking = this.apartment.parking
            obg.buildYead = this.apartment.buildYead
            obg.elevator = this.apartment.elevator
            obg.walls = this.apartment.walls
            obg.facing = this.apartment.facing
            obg.bathroom = this.apartment.bathroom
            // Нет', 'Балкон', 'Лоджия
            switch (this.apartment.loggia) {
              case 'Лоджия':
                obg.loggia = 2
                break
              case 'Балкон':
                obg.loggia = 1
                break
              default:
                obg.loggia = 0
                break
            }
            break
        }
        this.$store.commit('objects/addObject', obg)
        // this.$router.push('/SinginIn')
      }
    },
    guidGenerator () {
      const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (S4() + S4())
    }
  }
}
</script>>
<style>
</style>
