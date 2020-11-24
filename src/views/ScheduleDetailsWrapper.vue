<template>
  <v-container class="container-table">
    <div class="container-title">
      <v-icon color="primary" class="mr-3" @click="goBack"
        >mdi-chevron-left</v-icon
      >
      Detalhes da Consulta
    </div>
    <ScheduleDetails class="px-5" />
  </v-container>
</template>

<script>
import ScheduleDetails from "@/components/schedule/ScheduleDetails.vue";
import router from "@/router/index.js";

export default {
  name: "ScheduleDetailsWrapper",
  components: {
    ScheduleDetails,
  },
  methods: {
    goBack() {
      router.push("/schedule");
    },
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl'
</style>
