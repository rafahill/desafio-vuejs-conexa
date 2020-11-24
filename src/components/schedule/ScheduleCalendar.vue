<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" text color="primary" @click="setToday">
            Hoje
          </v-btn>
          <v-btn fab text small color="primary" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="primary" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined text color="primary" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Dia</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semana</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mês</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 dias</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:more="viewDay"
          @click:date="viewDay"
          @click:event="getScheduleDetails"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import router from "@/router/index.js";

export default {
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Mês",
      week: "Semana",
      day: "Dia",
      "4day": "4 Dias",
    },
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
  }),
  computed: {
    ...mapGetters(["scheduleList"]),
  },
  watch: {
    scheduleList() {
      const events = [];
      this.scheduleList.data.forEach((sl) => {
        events.push({
          id: sl.id,
          name: sl.paciente,
          start: sl.dataConsulta,
          end: sl.dataTerminoConsulta,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
        });
      });
      this.events = events;
    },
  },
  methods: {
    getScheduleDetails({ event }) {
      router.push(`/schedule-details/${event.id}`);
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>