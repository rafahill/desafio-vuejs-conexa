<template>
  <div class="pl-3 pt-3">
    <v-btn color="primary" depressed @click="openScheduleDialog">
      Agendar
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="450px">
      <v-card class="mx-auto" max-width="450">
        <v-card-title>Agendar Consulta</v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid" @submit="submitSchedule">
            <v-layout align-center justify-center row>
              <v-flex class="px-4 mt-3 animated fadeIn delay-0.5s">
                <v-text-field
                  outlined
                  label="ID Médico Responsável"
                  color="primary"
                  v-model="doctorId"
                  prepend-inner-icon="mdi-doctor"
                  :rules="[rules.required]"
                  autocomplete="off"
                  type="number"
                />
              </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
              <v-flex class="px-4 animated fadeIn delay-0.5s">
                <v-text-field
                  outlined
                  label="Nome do Paciente"
                  color="primary"
                  v-model="patient"
                  prepend-inner-icon="person"
                  :rules="[rules.required]"
                  autocomplete="off"
                />
              </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
              <v-flex class="px-4 animated fadeIn delay-0.5s">
                <v-menu
                  ref="datePicker"
                  v-model="datePicker"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      color="primary"
                      outlined
                      v-model="scheduleDateFormatted"
                      label="Data da consulta"
                      persistent-hint
                      prepend-inner-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                      :rules="[rules.required]"
                      autocomplete="off"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="scheduleDate"
                    no-title
                    @input="datePicker = false"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
              <v-flex class="px-4 animated fadeIn delay-0.5s">
                <v-text-field
                  outlined
                  label="Hora da Consulta"
                  color="primary"
                  type="time"
                  v-model="scheduleTime"
                  prepend-inner-icon="mdi-alarm"
                  :rules="[rules.required]"
                  autocomplete="off"
                />
              </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
              <v-flex class="px-4 animated fadeIn delay-0.5s">
                <v-textarea
                  outlined
                  label="Observação"
                  color="primary"
                  v-model="notes"
                  prepend-inner-icon="mdi-message-bulleted"
                  :rules="[rules.required]"
                  autocomplete="off"
                />
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center pb-3">
          <v-btn color="primary" outlined text @click="closeScheduleDialog">
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            depressed
            @click="submitSchedule"
            :disabled="!valid"
          >
            Agendar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
  mounted() {},
  watch: {
    scheduleDate() {
      this.scheduleDateFormatted = this.formatDate(this.scheduleDate);
    },
  },
  methods: {
    formatDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    resetForm() {
      this.$refs.form.reset();
    },
    submitSchedule(e) {
      if (!this.valid) return;
      e.preventDefault();
      let formattedDate = new Date(this.scheduleDate + " " + this.scheduleTime);
      let schedule = {
        dataConsulta: formattedDate,
        idMedico: this.doctorId,
        observacao: this.notes,
        paciente: this.patient,
      };
      this.$store.dispatch("createSchedule", schedule);
      this.closeScheduleDialog();
    },
    openScheduleDialog() {
      this.dialog = true;
    },
    closeScheduleDialog() {
      this.dialog = false;
      this.resetForm();
    },
  },
  data() {
    return {
      dialog: false,
      scheduleTime: null,
      datePicker: false,
      valid: null,
      doctorId: null,
      notes: null,
      scheduleDate: null,
      scheduleDateFormatted: null,
      patient: null,
      rules: {
        required: (value) => !!value || "Campo Obrigatorio",
        min: (v) => (v && v.length >= 4) || "Minimo de 4 caracteres",
      },
    };
  },
};
</script>
