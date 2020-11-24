<template>
  <v-form id="formLogin" v-model="valid" @submit="login">
    <div class="text-xs-center login-container">
      <v-layout pa-2>
        <v-flex>
          <div class="logo-header animated fadeIn delay-0.5s mt-6">
            <v-img height="95" src="@/assets/logo-conexa.svg" />
          </div>
          <v-layout
            justify-center
            class="custom-sub-header animated fadeIn delay-0.5s"
          >
          </v-layout>

          <v-layout align-center justify-center row>
            <v-flex
              xs10
              lg3
              class="px-4 custom-header animated fadeInLeft delay-0.5s"
            >
              <v-text-field
                outlined
                label="Email"
                color="primary"
                v-model="username"
                prepend-inner-icon="person"
                @click:clear="limparForm"
                :rules="[rules.required]"
              />
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center row>
            <v-flex xs10 lg3 class="px-4 animated fadeInRight delay-0.5s">
              <v-text-field
                outlined
                v-model="password"
                label="Senha"
                color="primary"
                prepend-inner-icon="vpn_key"
                :append-icon="show ? 'visibility' : 'visibility_off'"
                @click:append="show = !show"
                :type="show ? 'text' : 'password'"
                :rules="[rules.required, rules.min]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout justify-center row>
            <v-btn
              type="submit"
              @submit="login"
              color="primary"
              :disabled="!valid"
              outlined
              class="animated fadeIn delay-0.5s"
              >Entrar</v-btn
            >
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
  </v-form>
</template>

<script>
export default {
  methods: {
    limparForm() {
      this.username = "";
    },
    login(e) {
      if (!this.valid) return;
      e.preventDefault();
      this.$store.dispatch("login", {
        email: this.username,
        senha: this.password,
      });
    },
  },
  data() {
    return {
      valid: null,
      show: false,
      username: null,
      password: "",
      loading: false,
      rules: {
        required: (value) => !!value || "Campo Obrigatorio",
        min: (v) => (v && v.length >= 4) || "Minimo de 4 caracteres",
      },
    };
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/login/login.styl'
</style>

