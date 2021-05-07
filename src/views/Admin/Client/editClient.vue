<template>
  <div class="body-color">
    <div class="bg-gray-100 font-family-karla flex">

      <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div class="p-6">
          <img src="@/assets/image/logo/Logo_Skyplus.svg"
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

        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main class="w-full flex-grow p-6">
            <div class="leading-loose">
              <form class="p-10 bg-white rounded shadow-xl" @submit.prevent="handleUpdateForm">
                <center>
                  <p class="text-lg text-gray-800 font-medium pb-4">Mettre à jour les informations Client</p>
                </center>
                <div class="">
                  <label class="block text-sm text-gray-600">Nom</label>
                  <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
                         required="" placeholder="Nom" aria-label="Name" v-model="client.name"
                  >
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600">Email</label>
                  <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
                         required="" placeholder="Email" aria-label="Email" v-model="client.email"
                  >
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600">Nom du projet</label>
                  <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
                         required="" placeholder="Nom" aria-label="Name" v-model="client.name_project">
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600">Statut</label>
                  <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
                         required="" placeholder="Statut accepter ou refuser" aria-label="Name" v-model="client.status">
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600">Adresse</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
                         required="" placeholder="Adresse" aria-label="Email" v-model="client.address">
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600">Téléphone</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="tel"
                         required="" placeholder="Téléphone" aria-label="Email" v-model="client.phone">
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600">status du projet</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
                         required="" placeholder="status en cours, termine" aria-label="Email" v-model="client.address">
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600">Somme payée</label>
                  <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="number"
                         required="" placeholder="Saisir la somme payée" aria-label="Email"
                         v-model="client.amount_paid">
                </div>
                <center>
                  <div class="mt-6">
                    <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">
                      Valider
                    </button>
                  </div>
                </center>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import axios from 'axios'
import VueJwtDecode from "vue-jwt-decode";
import DropdownDashboard from "@/components/Dropdown/DropdownDashboard";
import HeaderDashboard from "@/components/ComponentsAdmins/Hearders/HeaderDashboard";
import swal from "sweetalert";

export default defineComponent({
  name: "editClient",
  components: {HeaderDashboard, DropdownDashboard},
  data() {
    return {
      client: {},
      isOpen1: false,
      isOpen2: true,
      showModal: false
    }
  },
  created() {
    let apiURL = `https://agencyskyplus.herokuapp.com/client/edit-client/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.client = res.data;
    })
    this.getUserDetails();
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `https://agencyskyplus.herokuapp.com/client/update-client/${this.$route.params.id}`;
      axios.post(apiURL, this.client).then((res) => {
        this.$router.push({name: 'Client'})
      }).catch(error => {
        swal("Error", "Quelque chose a mal tourné", "Error");
      });
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push({name: 'Login'});
    }
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

.body-color {
  width: 100%;
  height: 100%;
  top: 0px;
}
</style>
