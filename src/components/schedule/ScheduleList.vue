<template>
  <div>
    <v-data-table
      :headers="scheduleHeaders"
      :items="items"
      item-key="id"
      :search="search"
      no-results-text="Nenhum dado encontrado"
      :loading="loading"
    >
      <template v-slot:top>
        <v-layout justify-end class="mb-3">
          <v-flex xs2>
            <CreateSchedule />
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs6>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquisar"
              single-line
              hide-details
              class="pr-3"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </template>
      <template v-slot:item.medico="{ item }">
        <td>{{ item.medico.nome }}</td>
      </template>
      <template v-slot:item.dataConsulta="{ item }">{{
        formatDate(item.dataConsulta)
      }}</template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="getScheduleDetails(item.id)">
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import router from "@/router/index.js";
import CreateSchedule from "@/components/schedule/CreateSchedule.vue";

export default {
  components: {
    CreateSchedule,
  },
  mounted() {
    this.getScheduleList();
  },
  computed: {
    ...mapGetters(["scheduleList"]),
  },
  watch: {
    scheduleList() {
      this.items = this.scheduleList.data;
      this.loading = false;
    },
  },
  methods: {
    formatDate(date) {
      return moment(date, "YYYY-MM-DD hh:mm:ss").format("DD/MM/YYYY HH:mm");
    },
    getScheduleList() {
      this.$store.dispatch("getScheduleList");
    },
    getScheduleDetails(id) {
      router.push(`/schedule-details/${id}`);
    },
    closeViewItem() {
      this.dialog = false;
      this.selectedItem = null;
    },
    getColor(status) {
      if (status === "Ativo") return "green";
      else if (status === "Inativo") return "red";
      else return "orange";
    },
  },
  data() {
    return {
      loading: true,
      items: [],
      search: "",
      scheduleHeaders: [
        {
          text: "ID Consulta",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Médico Responsável", value: "medico" },
        { text: "Paciente", value: "paciente", sortable: false },
        { text: "Data da Consulta", value: "dataConsulta", sortable: false },

        { text: "Observação", value: "observacao", sortable: false },
        { text: "", value: "actions" },
      ],
    };
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl'
</style>
