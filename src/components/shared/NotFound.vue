<template>
  <div>Página não Encontrada</div>
</template>

<script>
import router from "@/router/index.js";

export default {
  created() {
    router.push("/");
  },
};
</script>