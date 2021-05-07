<template>
    <nav-bar/>
    <skyplus/>
    <hello/>
    <pieds-page/>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
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
  methods: {},
  setup(){
    let body = document.querySelector('body');
    body?.setAttribute('class','body-color1')
  }
})
</script>

<style scoped>

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
