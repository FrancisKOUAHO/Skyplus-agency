<template>
  <div class="bg-white rounded-lg shadow-lg py-2 w-48">
    <ul>
      <li
          class="block color-text text-purple-600 font-semibold px-4 py-2"><span>Profil</span>
      </li>
      <li
          class="block color-text text-purple-600 font-semibold px-4 py-2"><span>Paramètres</span>
      </li>
      <li @click="logUserOut"
          class="block color-text text-purple-600 font-semibold px-4 py-2"><span>Se déconnecter</span>
      </li>
    </ul>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "DropdownDashboard",
  data() {
    return {
      user: {},
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

  }
}
</script>

<style scoped>
.color-text, a {
  color: purple !important;
}
</style>
