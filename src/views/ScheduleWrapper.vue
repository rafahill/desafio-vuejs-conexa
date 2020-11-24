<template>
  <v-container class="container-table">
    <div class="container-title">Lista de Consultas</div>
    <ScheduleList />
    <div class="container-title">Calendario</div>
    <ScheduleCalendar />
  </v-container>
</template>

<script>
// @ is an alias to /src
import ScheduleList from "@/components/schedule/ScheduleList.vue";
import ScheduleCalendar from "@/components/schedule/ScheduleCalendar.vue";

export default {
  name: "ScheduleWrapper",
  components: {
    ScheduleList,
    ScheduleCalendar,
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl'
</style>
