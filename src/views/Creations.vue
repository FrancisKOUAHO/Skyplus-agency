<template>
  <!-- <div class="body-color"> -->
    <nav-bar/>
    <creation-bloc-top/>
    <gallery/>
    <creation-bloc-bottom/>
    <pieds-page/>
  <!-- </div> -->
</template>

<script lang="ts">
import NavBar from "@/components/NavBars/NavBar.vue";

interface Projets {
  title: string
  image: string
  description: string
  created: number
}

import {defineComponent} from 'vue';
import CreationBlocTop from "@/components/Cards/CreationBlocTop.vue";
import Gallery from "@/components/Gallery/Gallery.vue";
import CreationBlocBottom from "@/components/Cards/CreationBlocBottom.vue";
import PiedsPage from "@/components/Footers/PiedsPage.vue";

export default defineComponent({
  name: 'Creations',
  components: {CreationBlocTop, CreationBlocBottom, Gallery, PiedsPage, NavBar},
  data() {
    return {}
  }
})
</script>

<style>
body {
  background-image: linear-gradient(to left bottom, #86A8E7, #D16BA5);
}

</style>
