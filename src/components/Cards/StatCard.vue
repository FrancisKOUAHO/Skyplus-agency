<template>
  <div class="min-h-screen py-6 flex flex-col sm:py-12">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
      <!-- SMALL CARD ROUNDED -->
      <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
        <img class="w-16 h-16 object-cover" src="https://www.ophos-system.com/wp-content/uploads/2019/08/proximite%CC%81-client-maintenance-informatique.png" alt="" />
        <div class="flex flex-col justify-center">
          <p class="text-gray-900 dark:text-gray-300 font-semibold">Clients</p>
          <p class="text-black dark:text-gray-100 text-justify font-semibold">2</p>
        </div>
      </div>
      <!-- END SMALL CARD ROUNDED -->

      <!-- SMALL CARD ROUNDED -->
      <div class="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
        <img class="w-16 h-16 object-cover" src="https://dmo-constructions.fr/wp-content/uploads/2019/09/architect.png" alt="" />
        <div class="flex flex-col justify-center">
          <p class="text-gray-900 dark:text-gray-300 font-semibold">Projets en cours</p>
          <p class="text-black dark:text-gray-100 text-justify font-semibold">2</p>
        </div>
      </div>
      <!-- END SMALL CARD ROUNDED -->

      <!-- SMALL CARD ROUNDED -->
      <div class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
        <img class="w-16 h-16 object-cover" src="https://static.wixstatic.com/media/85d50f_00e22c8fddfc4ba88474ced2bbbf4102~mv2.png/v1/fill/w_340,h_236,al_c,q_85,usm_0.66_1.00_0.01/Projet%20termin%C3%A9.webp" alt="" />
        <div class="flex flex-col justify-center">
          <p class="text-gray-900 dark:text-gray-300 font-semibold">Projets terminer</p>
          <p class="text-black dark:text-gray-100 text-justify font-semibold">20</p>
        </div>
      </div>
      <!-- END SMALL CARD ROUNDED -->

      <!-- SMALL CARD ROUNDED -->
      <div class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
        <img class="w-16 h-16 object-cover" src="https://www.usherbrooke.ca/sari/w728/gnec/img/8/0/3510868580-money_bag.png" alt="" />
        <div class="flex flex-col justify-center">
          <p class="text-gray-900 dark:text-gray-300 font-semibold">Chiffre d'affaire</p>
          <p class="text-black dark:text-gray-100 text-justify font-semibold">$15 000,00</p>
        </div>
      </div>
      <!-- END SMALL CARD ROUNDED -->
    </div>
    <div class="w-full mt-12">
      <p class="text-xl pb-3 flex items-center">
        <i class="fas fa-list mr-3"></i> Derniers rapports
      </p>
      <div class="bg-white overflow-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
          <tr>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nom</th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Téléphone</th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Projet</th>
          </tr>
          </thead>
          <tbody class="text-gray-700" v-for="(get_client, index) in get_clients" :key="index">
          <tr class="bg-gray-200">
            <td class="w-1/3 text-left py-3 px-4">{{ get_client.name }}</td>
            <td class="text-left py-3 px-4"><a class="color-text" href="tel:622322662">{{
                get_client.phone
              }}</a>
            </td>
            <td class="text-left py-3 px-4"><a class="color-text"
                                               v-bind:href="'mailto:'+get_client.email">{{
                get_client.email
              }}</a>
            </td>
            <td class="text-left py-3 px-4"><span class="color-text">{{ get_client.project }}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

export default defineComponent({
  name: "StatCard",
  data() {
    return {
      user: {},
      isOpen1: false,
      isOpen2: true,
      get_clients: []
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push({name: 'Login'});
    }
  },
  created() {
    this.getUserDetails();
    let apiURL = 'https://agencyskyplus.herokuapp.com/client/get-client';
    axios.get(apiURL).then(res => {
      this.get_clients = res.data;
    }).catch(error => {
      console.log(error)
    });

  }
})
</script>

<style scoped>
.color-text {
  color: black !important;
}

</style>
