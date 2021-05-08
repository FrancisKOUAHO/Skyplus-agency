<template>
  <nav-bar/>
  <creation-bloc-top/>
  <gallery/>
  <creation-bloc-bottom/>
  <pieds-page class="pieds-page"/>
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
  },
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color3')
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded');
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
  }
})
</script>

<style scoped>
.pieds-page{
  margin-bottom: -5%
}
</style>
