<template>
  <div class="bg-gray-100 font-family-karla flex">

    <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div class="p-6">
        <img src="@/assets/image/logo/Logo_Skyplus.png"
             class="text-white text-3xl font-semibold uppercase hover:text-gray-300"/>
        <button
            class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          {{ user.name }}
        </button>
      </div>
      <header-dashboard/>
    </aside>

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <!-- Desktop Header -->
      <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
        <div class="w-1/2"></div>
        <div class="relative w-1/2 flex justify-end">
          <div class="flex">
            <div class="relative">
              <button
                  class="rounded-full overflow-hidden border-2 border-purple-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                  @click="isOpen1 = true"
              >
                <img src="https://i.pravatar.cc/150?u=1" alt="User's avatar">
              </button>
              <div v-if="isOpen1" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
                   @click="isOpen1 = false"></div>
              <div v-if="isOpen1" class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen1}">
                <dropdown-dashboard/>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="w-full overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6">
          <h1 class="text-3xl text-black pb-6">Tableau de bord
          </h1>

          <div class="flex flex-wrap mt-6">
            <div class="w-full lg:w-1/2 pr-0 lg:pr-2">
              <p class="text-xl pb-3 flex items-center">
                <i class="fas fa-plus mr-3"></i> Rapports mensuels
              </p>
              <div class="p-6 bg-white">
              </div>
            </div>
            <div class="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
              <p class="text-xl pb-3 flex items-center">
                <i class="fas fa-check mr-3"></i> Rapports résolus
              </p>
              <div class="p-6 bg-white">
                <canvas id="chartTwo" width="400" height="200"></canvas>
              </div>
            </div>
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
                  <td class="text-left py-3 px-4"><a class="color-text" href="tel:622322662">{{ get_client.phone }}</a>
                  </td>
                  <td class="text-left py-3 px-4"><a class="color-text"
                                                     v-bind:href="'mailto:'+get_client.email">{{ get_client.email }}</a>
                  </td>
                  <td class="text-left py-3 px-4"><span class="color-text">{{ get_client.project }}</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import VueJwtDecode from "vue-jwt-decode";
import 'alpinejs'
import HeaderDashboard from "@/components/ComponentsAdmins/Hearders/HeaderDashboard";
import DropdownDashboard from "@/components/Dropdown/DropdownDashboard";
import axios from "axios";

export default defineComponent({
  name: "Dashboard",

  components: {DropdownDashboard, HeaderDashboard},
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
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

.font-family-karla {
  font-family: karla;
}

.bg-sidebar {
  background: purple;
}

.cta-btn {
  color: purple;
}

.upgrade-btn {
  background: #purple;
}

.upgrade-btn:hover {
  background: purple;
}

.active-nav-link {
  background: purple;
}

.nav-item:hover {
  background: purple;
}

.account-link:hover {
  background: purple;
}

.color-text {
  color: black !important;
}

.color-text:hover {
  color: purple !important;
}
</style>
