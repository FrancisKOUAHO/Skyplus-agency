<template>
  <div class=" body-color">
    <nav-bar/>
    <skyplus/>
    <hello/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">


import {defineComponent} from 'vue'
import NavBar from "@/components/NavBars/NavBar.vue";
import PiedsPage from "@/components/Footers/PiedsPage.vue";
import Skyplus from "@/components/Cards/Skyplus.vue";
import Hello from "@/components/Barres/Hello.vue";

export default defineComponent({
  name: 'Accueil',
  components: {Hello, Skyplus, PiedsPage, NavBar},
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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
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
