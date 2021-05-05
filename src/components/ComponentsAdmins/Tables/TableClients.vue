<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                adresse
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                nom du projet
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Somme payée
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Modifier</span>
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(get_client, index) in get_clients" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{ get_client.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ get_client.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ get_client.address }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ get_client.name_project }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ get_client.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ get_client.amount_paid }} TTC/€
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link :to="{name: 'editClient', params: { id: get_client._id }}"
                             class="mod-text bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Modifier
                </router-link>
                <button
                    @click.prevent="deleteClient(get_client._id)"
                    style="margin-left: 8%"
                    class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  Supprimer
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";



export default {
  name: "TableClients",
  data() {
    return {
      get_clients: []
    }
  },
  created() {
    let apiURL = 'https://agencyskyplus.herokuapp.com/client/get-client';
    axios.get(apiURL).then(res => {
      this.get_clients = res.data;
    }).catch(error => {
      console.log(error)
    });
  },
  methods: {
    deleteClient(id) {
      let apiURL = `https://agencyskyplus.herokuapp.com/client/delete-client/${id}`;
      let indexOfArrayItem = this.get_clients.findIndex(i => i._id === id);
      let nameClients = this.get_clients[0].name

      if (window.confirm("Voulez-vous vraiment supprimer ?")) {
        axios.delete(apiURL).then(() => {
          this.get_clients.splice(indexOfArrayItem, 1);
          swal("Success",`Le client ${nameClients} à été supprimer`, "Error");
        }).catch(error => {
          console.log(error)
        });
      }
    }
  }
}
</script>

<style scoped>
.mod-text {
  color: #4299E1 !important;
}

.mod-text:hover {
  color: white !important;
}
</style>
