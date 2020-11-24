<template>
  <v-container class="container-table">
    <div class="container-title">Pacientes</div>
    <PatientList />
  </v-container>
</template>

<script>
import PatientList from "@/components/patients/PatientList.vue";

export default {
  name: "PatientWrapper",
  components: {
    PatientList,
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl'
</style>
