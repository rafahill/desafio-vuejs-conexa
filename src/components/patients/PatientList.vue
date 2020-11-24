<template>
  <div>
    <v-data-table
      :headers="patientHeaders"
      :items="patients"
      item-key="name"
      :search="search"
    >
      <template v-slot:top>
        <v-layout justify-end class="mb-3">
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
      <template v-slot:item.status="{ item }">
        <v-chip small :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="viewItem(item)"> mdi-eye </v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="450px" v-if="selectedItem">
      <v-card class="mx-auto" max-width="450">
        <v-layout justify-center class="pt-3">
          <v-avatar size="140">
            <img :src="selectedItem.avatar" />
          </v-avatar>
        </v-layout>

        <v-card-title>{{ selectedItem.name }}</v-card-title>

        <v-card-text>
          <v-layout align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4"></div>
          </v-layout>

          <v-layout justify-space-around class="mx-1 mt-3" row>
            <v-flex xs6>
              <div class="profile-title">Nome Completo</div>
            </v-flex>
            <v-flex xs6>
              <div class="profile-title">Idade</div>
            </v-flex>

            <v-flex xs6>
              <div>{{ selectedItem.name }}</div>
            </v-flex>
            <v-flex xs6>
              <div>{{ selectedItem.age }}</div>
            </v-flex>

            <v-flex xs6>
              <div class="profile-title">Email</div>
            </v-flex>
            <v-flex xs6>
              <div class="profile-title">Telefone</div>
            </v-flex>

            <v-flex xs6>
              <div>{{ selectedItem.mail }}</div>
            </v-flex>
            <v-flex xs6>
              <div>{{ selectedItem.phone }}</div>
            </v-flex>

            <v-flex xs6>
              <div class="profile-title">Altura</div>
            </v-flex>
            <v-flex xs6>
              <div class="profile-title">Peso</div>
            </v-flex>

            <v-flex xs6>
              <div>{{ selectedItem.height }}</div>
            </v-flex>
            <v-flex xs6>
              <div>{{ selectedItem.weight }}</div>
            </v-flex>

            <v-flex xs6>
              <div class="profile-title">Sexo</div>
            </v-flex>
            <v-flex xs6>
              <div class="profile-title">Convênio</div>
            </v-flex>

            <v-flex xs6>
              <div>{{ selectedItem.gender }}</div>
            </v-flex>
            <v-flex xs6>
              <div>{{ selectedItem.healthInsurance }}</div>
            </v-flex>

            <v-flex xs6>
              <div class="profile-title">Situação</div>
            </v-flex>
            <v-flex xs6>
              <div class="profile-title">Última Consulta</div>
            </v-flex>

            <v-flex xs6>
              <div>{{ selectedItem.status }}</div>
            </v-flex>
            <v-flex xs6>
              <div>{{ selectedItem.lastSchedule }}</div>
            </v-flex>
          </v-layout>

          <v-divider class="mx-3 mt-4 mb-3"></v-divider>

          <v-layout justify-space-around class="mx-1" row>
            <v-flex xs6>
              <div class="profile-title">Situação</div>
            </v-flex>
            <v-flex xs6>
              <div class="profile-title">Última Consulta</div>
            </v-flex>

            <v-flex xs6>
              <v-chip small :color="getColor(selectedItem.status)" dark>
                {{ selectedItem.status }}
              </v-chip>
            </v-flex>
            <v-flex xs6>
              <div>{{ selectedItem.lastSchedule }}</div>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-actions class="justify-center pb-3">
          <v-btn color="primary" outlined text @click="closeViewItem">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    viewItem(item) {
      this.dialog = true;
      this.selectedItem = item;
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
      search: "",
      dialog: false,
      selectedItem: null,
      patientHeaders: [
        {
          text: "Nome Completo",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "E-mail", value: "mail" },
        { text: "Telefone", value: "phone", sortable: false },
        { text: "Última Consulta", value: "lastSchedule", sortable: false },

        { text: "Situação", value: "status", align: "center", sortable: false },
        { text: "", value: "actions" },
      ],
      patients: [
        {
          name: "Paulo Pontes",
          lastSchedule: "23/02/2020",
          phone: "(48) 99898-5959",
          mail: "paulopontes@gmail.com",
          status: "Ativo",
          age: "29",
          gender: "Masculino",
          height: "1,79",
          weight: "85kg",
          healthInsurance: "Unimed",
          avatar: "https://randomuser.me/api/portraits/men/78.jpg",
        },
        {
          name: "Roberta Pereira",
          lastSchedule: "19/09/2020",
          phone: "(41) 99656-5959",
          mail: "roberper@gmail.com",
          status: "Ativo",
          age: "28",
          gender: "Feminino",
          height: "1,55",
          weight: "52kg",
          healthInsurance: "Amil",
          avatar: "https://randomuser.me/api/portraits/women/48.jpg",
        },
        {
          name: "Andre Silva",
          lastSchedule: "23/02/2019",
          phone: "(41) 99898-5539",
          mail: "asilva21@gmail.com",
          status: "Inativo",
          age: "32",
          gender: "Masculino",
          height: "1,71",
          weight: "75kg",
          healthInsurance: "Bradesco",
          avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        },
        {
          name: "Allan Joaquim Junior",
          lastSchedule: "21/11/2020",
          phone: "(49) 96598-5959",
          mail: "allanjj@gmail.com",
          status: "Novo",
          age: "19",
          gender: "Masculino",
          height: "1,85",
          weight: "91kg",
          healthInsurance: "Unimed",
          avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        },
        {
          name: "Gilberto Pedroso",
          lastSchedule: "22/11/2020",
          phone: "(48) 99898-2329",
          mail: "gilpedro@gmail.com",
          status: "Novo",
          age: "21",
          gender: "Masculino",
          height: "1,87",
          weight: "102kg",
          healthInsurance: "Unimed",
          avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          name: "Elaine Almeida",
          lastSchedule: "25/05/2019",
          phone: "(51) 99968-5959",
          mail: "elainealmeida@gmail.com",
          status: "Inativo",
          age: "57",
          gender: "Feminino",
          height: "1,67",
          weight: "75kg",
          healthInsurance: "Amil",
          avatar: "https://randomuser.me/api/portraits/women/47.jpg",
        },
        {
          name: "Roberta Afonso Camargo",
          lastSchedule: "11/11/2020",
          phone: "(41) 99338-5959",
          mail: "robafonso@gmail.com",
          status: "Novo",
          age: "38",
          gender: "Feminino",
          height: "1,61",
          weight: "62kg",
          healthInsurance: "NotreDame Intermédica",
          avatar: "https://randomuser.me/api/portraits/women/46.jpg",
        },
        {
          name: "Angelina Cabral",
          lastSchedule: "12/04/2018",
          phone: "(11) 96331-5959",
          mail: "acabral@gmail.com",
          status: "Inativo",
          age: "27",
          gender: "Feminino",
          height: "1,60",
          weight: "65kg",
          healthInsurance: "NotreDame Intermédica",
          avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
          name: "Agatha Mitchel",
          lastSchedule: "29/10/2020",
          phone: "(31) 99888-7859",
          mail: "agathaam@gmail.com",
          status: "Novo",
          age: "22",
          gender: "Feminino",
          height: "1,68",
          weight: "71kg",
          healthInsurance: "Amil",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Rafael Bonatto",
          lastSchedule: "03/08/2020",
          phone: "(11) 96698-5899",
          mail: "rafaelbonatto@gmail.com",
          status: "Ativo",
          age: "37",
          gender: "Masculino",
          height: "1,78",
          weight: "88kg",
          healthInsurance: "Unimed",
          avatar: "https://randomuser.me/api/portraits/men/74.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="stylus">
@import '~@/assets/style/shared/shared.styl'
</style>
