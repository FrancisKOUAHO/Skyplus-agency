<template>
  <div class="body-color">
    <nav-bar/>
    <div>

      <skyplus/>
    </div>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import PiedsPage from "@/components/PiedsPage.vue";
import Skyplus from "@/components/Skyplus.vue";

export default defineComponent({
  name: 'Agence',
  components: {Skyplus, PiedsPage, NavBar},
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
