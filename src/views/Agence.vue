<template>
  <div class="body-color">
    <nav-bar/>
    <agence1/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBars/NavBar.vue";
import Agence1 from "@/components/Cards/Agence.vue"
import PiedsPage from "@/components/Footers/PiedsPage.vue";

export default defineComponent({
  name: 'Agence',
  components: {PiedsPage, NavBar, Agence1},
  data() {
    return {
      color: '#333'
    }
  }
})
</script>

<style scoped>
.body-color{
  background-image: linear-gradient(to left bottom, #355EF2, #355EF2, #355EF2,
  #72BFD4, #72BFD4);
}
</style>
