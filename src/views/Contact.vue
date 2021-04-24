<template>
  <div class="body-color">
    <nav-bar/>
    <contact-vue/>
    <reseau-sociaux/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import PiedsPage from "@/components/PiedsPage.vue";
import ContactVue from "@/components/ContactVue.vue";
import ReseauSociaux from "@/components/ReseauSociaux.vue";

export default defineComponent({
  name: 'Contact',
  components: {ReseauSociaux, ContactVue, PiedsPage, NavBar},
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
