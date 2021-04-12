<template>
  <div class="body-color">
    <nav-bar/>
    <h1>Contact</h1>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import PiedsPage from "@/components/PiedsPage.vue";

export default defineComponent({
  name: 'Contact',
  components: {PiedsPage, NavBar},
  data() {
    return {}
  }
})
</script>

<style scoped>
.body-color {
  background-image: linear-gradient(to left bottom, #C94F0A, #C94F0A, #EA6232,
  #F3B248, #F3B248);
  min-height: 100vh;
}
</style>
