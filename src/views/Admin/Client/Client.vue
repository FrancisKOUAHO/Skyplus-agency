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
                  <img src="@/assets/image/logo/Logo_Skyplus.svg" alt="User's avatar">
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
            <h1 class="w-full text-3xl text-black pb-6">Tableau des Clients</h1>
            <table-clients/>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                <register-client/>
              </div>
              <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDashboard from "../../../components/ComponentsAdmins/Hearders/HeaderDashboard";
import VueJwtDecode from "vue-jwt-decode";
import TableClients from "@/components/ComponentsAdmins/Tables/TableClients";
import DropdownDashboard from "@/components/Dropdown/DropdownDashboard";
import RegisterClient from "@/components/Forms/RegisterClient";

export default {
  name: "Client",
  components: {RegisterClient, DropdownDashboard, TableClients, HeaderDashboard},
  data() {
    return {
      user: {},
      isOpen1: false,
      isOpen2: true,
      showModal: false
    };
  },
  setup() {
    let navBar = document.querySelector('nav');
    let footer = document.querySelector('footer');
    navBar.style.display = 'none';
    footer.style.display = 'none';
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

  }
}
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
