<template>
  <div class="body-color">
    <nav-bar/>
    <agence1/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import Agence1 from "@/components/Agence.vue"
import PiedsPage from "@/components/PiedsPage.vue";

export default defineComponent({
  name: 'Agence',
  components: {PiedsPage, NavBar, Agence1},
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
