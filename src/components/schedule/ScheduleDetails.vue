<template>
  <div>
    <div v-if="scheduleDetails.data">
      <v-layout>
        <v-flex xs3>
          <div class="profile-title">ID Consulta</div>
        </v-flex>
        <v-flex xs3>
          <div class="profile-title">Médico Responsável</div>
        </v-flex>
        <v-flex xs3>
          <div class="profile-title">Paciente</div>
        </v-flex>
        <v-flex xs3>
          <div class="profile-title">Data Consulta</div>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs3>
          <div>{{ scheduleDetails.data.id }}</div>
        </v-flex>
        <v-flex xs3>
          <div>{{ scheduleDetails.data.medico.nome }}</div>
        </v-flex>
        <v-flex xs3>
          <div>{{ scheduleDetails.data.paciente }}</div>
        </v-flex>
        <v-flex xs3>
          <div>{{ formatDate(scheduleDetails.data.dataConsulta) }}</div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapGetters(["scheduleDetails", "scheduleList"]),
  },

  data() {
    return {
      loading: true,
      items: [],
    };
  },
  mounted() {
    this.getScheduleDetails();
  },
  methods: {
    formatDate(date) {
      return moment(date, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY HH:mm");
    },
    async getScheduleDetails() {
      let id = this.$route.params.id;
      if (this.scheduleList && this.scheduleList.length < 1) {
        await this.$store.dispatch("getScheduleList").then(() => {
          this.$store.dispatch("getScheduleDetails", id);
        });
      } else {
        await this.$store.dispatch("getScheduleDetails", id);
      }
    },
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl'
</style>
      