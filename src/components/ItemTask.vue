<template>
  <q-item clickable>
    <q-item-section avatar>
      <q-icon name="drag_indicator" />
    </q-item-section>
    <q-item-secion>
      <q-item-label>{{ props.data.name }} {{ $t("failed") }} </q-item-label>
      <q-item-label caption>meta</q-item-label>
    </q-item-secion>
    <q-item-section>
      <q-btn round color="primary" flat icon="done" size="12px">
        <q-tooltip
          class="bg-positive"
          transition-show="rotate"
          transition-hide="rotate"
        >
          Terminate
        </q-tooltip>
      </q-btn>
      <q-btn round color="primary" flat icon="edit" size="12px">
        <q-tooltip
          class="bg-positive"
          transition-show="rotate"
          transition-hide="rotate"
        >
          Edit
        </q-tooltip>
      </q-btn>
      <q-btn round color="primary" flat icon="delete" size="12px">
        <q-tooltip
          class="bg-positive"
          transition-show="rotate"
          transition-hide="rotate"
        >
          Delete
        </q-tooltip>
      </q-btn>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps(["data"]);
const msg = "Test message";
</script>
