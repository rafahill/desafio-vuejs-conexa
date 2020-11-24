<template>
  <v-app>
    <v-main class="ma-5">
      <div>
        <NavigationDrawer v-if="this.$route.name !== 'login'" />
        <Loader />
        <router-view></router-view>
        <snack-bar/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Loader from './components/shared/Loader'
import SnackBar from './components/shared/SnackBar'
import NavigationDrawer from './components/shared/NavigationDrawer'

export default {
  name: 'App',
  components: {
      Loader,
      SnackBar, 
      NavigationDrawer
    },
  data: () => ({
    //
  }),
};
</script>
