import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#156665',
        secondary: '#a51d36',
        accent: '#c0b498',
        error: '#a51d36'
      }
    }
  }
});
