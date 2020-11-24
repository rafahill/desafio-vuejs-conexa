<template>
  <v-navigation-drawer app permanent class="custom-nav">
    <template v-slot:prepend>
      <v-img class="ma-3 mt-5" src="@/assets/logo-conexa.svg" />
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/79.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
          <v-list-item-subtitle>Fisioterapeuta</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="goTo(item.title)"
      >
        <v-list-item-icon>
          <v-icon :size="item.size">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import router from "@/router/index.js";

export default {
  computed: {
    ...mapGetters(["userName"]),
  },
  methods: {
    goTo(title) {
      switch (title) {
        case "Agenda":
          if (this.$route.name !== "schedule") router.push("/");
          break;
        case "Pacientes":
          if (this.$route.name !== "patient-list") router.push("/patient-list");
          break;
        case "Sair":
          this.$store.dispatch("logout");
          break;
      }
    },
  },
  data() {
    return {
      items: [
        { title: "Agenda", icon: "mdi-calendar-month", size: "20" },
        { title: "Pacientes", icon: "fas fa-users", size: "16" },
        { title: "Sair", icon: "fas fa-sign-out-alt", size: "20" },
      ],
    };
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl';
</style>