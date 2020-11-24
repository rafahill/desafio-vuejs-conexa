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
</style>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl'
</style>
