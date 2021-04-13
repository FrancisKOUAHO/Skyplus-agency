<template>
  <div class=" body-color">
    <nav-bar/>
    <line-vertical/>
    <div>
      <skyplus/>
      <line-horizontal/>
    </div>
    <square/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/PiedsPage.vue";
import PiedsPage from "@/components/PiedsPage.vue";
import Square from "@/components/square.vue";
import LineVertical from "@/components/LineVertical.vue";
import Skyplus from "@/components/Skyplus.vue";
import LineHorizontal from "@/components/LineHorizontal.vue";

export default defineComponent({
  name: 'Accueil',
  components: {LineHorizontal, Skyplus, LineVertical, Square, PiedsPage, NavBar},
  data() {
    return {}
  }
})
</script>

<style scoped>
.body-color {
  background-image: linear-gradient(to left bottom, #7e80cb, #5e8cd2, #3b95d1, #139ecb, #00a4c1,
  #00adc1, #00b6be, #00bfb9, #00cfc2, #00dfc9, #00efce, #00ffd2);
  min-height: 100vh;
}

</style>
