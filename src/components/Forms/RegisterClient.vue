<template>
  <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
    <p class="text-xl pb-6 flex items-center">
      <i class="fas fa-list mr-3"></i> Enregistrer nouveau client
    </p>
    <div class="leading-loose">
      <form class="p-10 bg-white rounded shadow-xl" @submit.prevent="registerClient">
        <center>
          <p class="text-lg text-gray-800 font-medium pb-4">Fiche Client</p>
        </center>
        <div class="">
          <label class="block text-sm text-gray-600">Nom</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
                 required="" placeholder="Nom" aria-label="Name" v-model="register.name"
          >
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600">Email</label>
          <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
                 required="" placeholder="Email" aria-label="Email" v-model="register.email"
          >
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600">Nom du projet</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
                 required="" placeholder="Nom" aria-label="Name" v-model="register.name_project">
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600">Statut</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
                 required="" placeholder="Statut accepter ou refuser" aria-label="Name" v-model="register.status">
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600">Adresse</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
                 required="" placeholder="Adresse" aria-label="Email" v-model="register.address">
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600">Somme payée</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
                 required="" placeholder="Saisir la somme payée" aria-label="Email" v-model="register.amount_paid">
        </div>
        <center>
          <div class="mt-6">
            <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Enregistrer
            </button>
          </div>
        </center>
      </form>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import swal from "sweetalert";
import axios from 'axios';

export default defineComponent({
  name: "RegisterClient",
  data() {
    return {
      register: {
        name: "",
        email: "",
        name_project: "",
        status: "",
        amount_paid: "",
        address: "",
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await axios.post("https://agencyskyplus.herokuapp.com/register/client", this.register);
        console.log(response);
        if (response) {
          swal("Success", "le nouveau client a ete enregistré", "success");
        } else {
          swal("Error","impossible d'enregistrer", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status === 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
})
</script>

<style scoped>

</style>
