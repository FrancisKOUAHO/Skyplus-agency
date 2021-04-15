<template>
  <div class="body-color">
    <nav-bar/>
    <gallery/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";

interface Projets {
  title: string
  image: string
  description: string
  created: number
}

import {defineComponent} from 'vue'
import PiedsPage from "@/components/PiedsPage.vue";
import Gallery from "@/components/Gallery.vue";

export default defineComponent({
  name: 'Creations',
  components: {Gallery, PiedsPage, NavBar},
  data() {
    return {
      projets: [
        {
          title: 'Jacky',
          image: 'Vue Team',
          description: 'aaaaaa',
        },
        {
          title: 'Francis',
          image: 'Vue Team',
          description: 'aaaaaa',
        }
      ]
    }
  }
})
</script>

<style scoped>
.body-color {
  background-image: linear-gradient(to left bottom, #88d9d8, #4ed2ef, #5cc8ff, #88bbff, #b5a9fa,
  #cb9bec, #de8cd9);
  min-height: 100vh;
}

</style>
