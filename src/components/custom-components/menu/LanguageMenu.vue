<template>
  <q-btn flat round dense icon="language">
    <q-menu auto-close>
      <q-list style="min-width: 100px">
        <q-item clickable @click="languageSelected('en-US')">
          <q-item-section>{{ $t("english") }}</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable @click="languageSelected('es')">
          <q-item-section>{{ $t("espanish") }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });

function languageSelected(language) {
  locale.value = language;
}
</script>
