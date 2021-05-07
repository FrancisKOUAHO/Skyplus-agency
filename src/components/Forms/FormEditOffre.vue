<template>
  <div class="leading-loose">
    <form class="p-10 bg-white rounded shadow-xl" @submit.prevent="handleSubmitForm">
      <center>
        <p class="text-lg text-gray-800 font-medium pb-4">Enregistrer des nouveaux offres</p>
      </center>
      <div class="">
        <label class="block text-sm text-gray-600">Title</label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
               required="" placeholder="Title" aria-label="Title" v-model="client.name"
        >
      </div>
      <div class="mt-2">
        <label class="block text-sm text-gray-600">Sous-titre</label>
        <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
               required="" placeholder="Sous-titre" aria-label="Sous-titre" v-model="client.email"
        >
      </div>
      <div class="mt-2">
        <label class="block text-sm text-gray-600">Option 1</label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
               required="" placeholder="Option 1" aria-label="Option 1" v-model="client.name_project">
      </div>
      <div class="mt-2">
        <label class="block text-sm text-gray-600">Option 2</label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text"
               required="" placeholder="Option 2" aria-label="Option 2" v-model="client.status">
      </div>
      <div class="mt-2">
        <label class=" block text-sm text-gray-600">Option 3</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text"
               required="" placeholder="Option 3" aria-label="Option 3" v-model="client.address">
      </div>
      <div class="mt-2">
        <label class=" block text-sm text-gray-600">Option 4</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="tel"
               required="" placeholder="Option 4" aria-label="Option 4" v-model="client.phone">
      </div>
      <div class="mt-2">
        <label class=" block text-sm text-gray-600">Prix HTC/mois</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="number"
               required="" placeholder="Prix HTC/mois" aria-label="Prix HTC/mois" v-model="client.project">
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
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "FormEditOffre",
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
}
</script>

<style scoped>

</style>
