<template>
  <v-snackbar
    :color="snackbarColor"
    v-model="snackbar"
    vertical
    class="common-snackbar"
  >
    <div class="row-space-between">
      <div class="row-start-left">
        <v-icon dark v-if="snackbarColor === 'success'" class="mr-4"
          >mdi-checkbox-marked-circle-outline</v-icon
        >
        <span class="text-xs-center" v-html="snackbarMessage"></span>
      </div>
    </div>
    <ul id="error-list" v-if="errorList">
      <li v-for="(item, index) in errorList" :key="index">
        <ul v-for="(message, i) in item" :key="`message-${i}`">
          <li class="no-bullets text-xs-left">{{ message }}</li>
        </ul>
      </li>
    </ul>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["errorList", "snackbarMessage", "snackbarColor"]),
    snackbar: {
      get() {
        return this.$store.getters.snackbar;
      },
      set() {
        this.$store.dispatch("closeSnackbar");
      },
    },
  },
};
</script>

<style scoped>
span {
  width: 100%;
}

.no-bullets {
  list-style: none;
}

.row-space-between {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

.row-start-left {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
}

.row-end-right {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
}
</style>

<style>
.common-snackbar .v-snack__content {
  padding: 12px 8px 0 8px;
}
</style>
