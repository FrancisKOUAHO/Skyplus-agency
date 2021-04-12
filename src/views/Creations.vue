<template>
  <div class="body-color">
    <nav-bar/>
    <h1>Projets</h1>
    <ul v-for="(projet, index) in projets" :key="index">
      <li>{{ projet.title }}</li>
      <li>{{ projet.image }}</li>
      <li>{{ projet.description }}</li>
    </ul>
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

export default defineComponent({
  name: 'Creations',
  components: {PiedsPage, NavBar},
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
