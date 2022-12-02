import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#024F4E",
        secondary: "#FFC804",
        accent: "#FF8A01",
        error: "#f44336",
        warning: "#960D0",
        info: "#03a9f4",
        success: "#49b67e",
      },
    },
  },
});
