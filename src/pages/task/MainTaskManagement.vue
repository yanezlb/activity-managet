<template>
  <q-page class="bg-blue-grey-1" padding>
    <div class="row q-col-gutter-x-md">
      <div class="col-7">
        <div class="rounded bg-white shadow-3" style="padding: 10px">
          <full-calendar :options="calendarOptions" />
        </div>
      </div>
      <div class="col-5">
        <div class="rounded bg-white shadow-3">
          <br />
          <span class="text-bold" style="margin-left: 15px; margin-top: 152px"
            >Fecha:</span
          >
          02/02/2022

          <draggable
            v-model="myArray"
            group="people"
            @start="drag = true"
            @end="drag = false"
            item-key="id"
            :onChange="checkMove"
          >
            <template #item="{ element }">
              <item-task :data="element" :key="element.id" />
            </template>
          </draggable>

          <br />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref, watch } from "vue";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import draggable from "vuedraggable";
import ItemTask from "components/ItemTask.vue";

const myArrayInit = [
  {
    id: 1,
    name: "Cenco - Integrar con pinia",
    type: {
      name: "trabajo",
      color: "#bcbcbc",
    },
  },
  {
    id: 2,
    name: "Rodar 30KM",
    type: {
      name: "deporte",
      color: "#bcbcbc",
    },
  },
  {
    id: 3,
    name: "Tercer projecto",
    type: {
      name: "deporte",
      color: "#bcbcbc",
    },
  },
  {
    id: 4,
    name: "Cuarto projecto",
    type: {
      name: "deporte",
      color: "#bcbcbc",
    },
  },
];

const drag = ref(false);
const myArray = ref(myArrayInit);

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  dateClick: handleClick,
  eventClick: eventClickListener,
  events: [
    {
      // this object will be "parsed" into an Event Object
      title: "This is my event", // a property!
      start: "2022-08-01", // a property!
      end: "2022-08-05",
      color: "#bcbcbc", // a property! ** see important note below about 'end' **
    },
    {
      // this object will be "parsed" into an Event Object
      title: "Event", // a property!
      start: "2022-08-01", // a property!
      end: "2022-08-01",
      color: "red", // a property! ** see important note below about 'end' **
    },
    {
      // this object will be "parsed" into an Event Object
      title: "Event", // a property!
      start: "2022-08-01", // a property!
      end: "2022-08-01",
      color: "white",
      borderColor: "red",
      textColor: "red", // a property! ** see important note below about 'end' **
    },
    {
      // this object will be "parsed" into an Event Object
      title: "Event", // a property!
      start: "2022-08-01", // a property!
      end: "2022-08-01",
      color: "yellow", // a property! ** see important note below about 'end' **
    },
    {
      // this object will be "parsed" into an Event Object
      title: "Event", // a property!
      start: "2022-08-01", // a property!
      end: "2022-08-01",
      color: "white",
      borderColor: "blue",
      textColor: "blue", // a property! ** see important note below about 'end' **
    },
  ],
};

function checkMove(evt) {
  console.log("Dentro checkMove");
}

function eventClickListener(info) {
  console.log("Dentro eventClickListener");
}

function handleClick(arg) {
  console.log(JSON.stringify(arg.dateStr));
}
</script>
<style scoped>
.rounded {
  border-radius: 15px;
}
</style>
