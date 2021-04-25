<template>
  <div class=" body-color">
    <nav-bar/>
    <router-link :to="{name: 'Creations'}">
      <skyplus/>
    </router-link>
    <square class="square"/>
    <hello/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/PiedsPage.vue";
import PiedsPage from "@/components/PiedsPage.vue";
import Square from "@/components/square.vue";
import Skyplus from "@/components/Skyplus.vue";
import Hello from "@/components/Hello.vue";

export default defineComponent({
  name: 'Accueil',
  components: {Hello, Skyplus, Square, PiedsPage, NavBar},
  data() {
    return {}
  },
  methods: {}
})
</script>

<style scoped>
.body-color {
  background-image: linear-gradient(to left bottom, #7e80cb, #5e8cd2, #3b95d1, #139ecb, #00a4c1,
  #00adc1, #00b6be, #00bfb9, #00cfc2, #00dfc9, #00efce, #00ffd2);
  min-height: 100vh;
}

.square {
  margin-left: 70%;
  margin-top: -35%
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}

.btn-placement {
  margin-left: 28%;
  width: 14%;
  margin-top: 1%;
  background-image: linear-gradient(to right, #E18CFF, #E18CFF, #C489F0, #C489F0, #C489F0,
  #C489F0, #AF86E5, #AF86E5, #7E80CB);
}

img {
  float: right;
  width: 10px;
  margin-top: 4.5%;
}

</style>
