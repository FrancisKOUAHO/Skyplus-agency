<template>
  <div class="body-color">
    <nav-bar/>
    <div>
      <line-vertical/>
      <skyplus/>
      <line-horizontal/>
    </div>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import PiedsPage from "@/components/PiedsPage.vue";
import LineVertical from "@/components/LineVertical.vue";
import Skyplus from "@/components/Skyplus.vue";
import LineHorizontal from "@/components/LineHorizontal.vue";

export default defineComponent({
  name: 'Agence',
  components: {LineHorizontal, Skyplus, LineVertical, PiedsPage, NavBar},
  data() {
    return {}
  }
})
</script>

<style scoped>
.body-color {
  background-image: linear-gradient(to left bottom, #355EF2, #355EF2, #355EF2,
  #72BFD4, #72BFD4);
  min-height: 100vh;
}
</style>
