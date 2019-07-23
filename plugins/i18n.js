import Vue from 'vue'
import VueI18n from 'vue-i18n'

import EnMessages from "~/assets/locales/en.json"
import FrMessages from "~/assets/locales/fr.json"

Vue.use(VueI18n);

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: EnMessages,
      fr: FrMessages
    }
  });
}
