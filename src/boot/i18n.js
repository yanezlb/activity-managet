import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";

export default boot(({ app }) => {
  const lang =
    (navigator.language.split("-")[0] ||
      process.env.VUE_APP_I18N_LOCALE ||
      "en-US") == "en"
      ? "en-US"
      : "es";
  const i18n = createI18n({
    locale: lang,
    globalInjection: true,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
