import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3cb4e7',
        secondary: '#ef4056',
        anchor: '#8c9eff',
      },
    },
  },
})

export default vuetify