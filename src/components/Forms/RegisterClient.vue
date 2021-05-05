<template>
  <div class="leading-loose">
    <form class="p-10 bg-white rounded shadow-xl" @submit.prevent="handleSubmitForm">
      <center>
        <p class="text-lg text-gray-800 font-medium pb-4">Enregistrer un nouveau client</p>
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
               required="" placeholder="status en cours, termine" aria-label="Email" v-model="client.project">
      </div>
      <div class="mt-2">
        <label class=" block text-sm text-gray-600">Somme payée</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="number"
               required="" placeholder="Saisir la somme payée" aria-label="Email" v-model="client.amount_paid">
      </div>
      <center>
        <div class="mt-6">
          <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Enregistrer
          </button>
        </div>
      </center>
    </form>
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
      client: {
        name: "",
        email: "",
        name_project: "",
        status: "",
        amount_paid: "",
        address: "",
        phone: "",
        project: ""
      }
    }
  },
  methods: {
    handleSubmitForm() {
      let apiURL = 'https://agencyskyplus.herokuapp.com/client/create-client';

      axios.post(apiURL, this.client).then(() => {
        this.$router.push({name: 'Client'})
        this.client = {
          name: "",
          email: "",
          name_project: "",
          status: "",
          amount_paid: "",
          address: "",
          phone: "",
          project: ""
        }
        console.log(this.client)
        swal("Success", `Le client à bien éte enregistré`, "Success");
        setTimeout( this.refresh, 3000);
      }).catch(error => {
        swal("Error", "Quelque chose a mal tourné", "error");
      });
    },
    refresh: function(){
      document.location.reload();
    }
  }
})
</script>

<style scoped>

</style>
