<template>
  <div class="text-center">
    <v-overlay :value="openDialog" color="white">
      <v-progress-circular
        indeterminate
        size="65"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Loading",
  computed: {
    ...mapGetters(["loading", "message", "color"]),
    openDialog: {
      get() {
        return this.loading;
      },
      set(val) {
        this.subtractLoading(val);
      },
    },
  },
  methods: {
    ...mapActions({
      subtractLoading: "subtractLoading",
    }),
  },
};
</script>
