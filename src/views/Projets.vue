<template>
  <h1>Projets</h1>
  <ul v-for="(projet, index) in projets" :key="index">
    <li>{{ projet.title }}</li>
    <li>{{ projet.image }}</li>
    <li>{{ projet.description }}</li>

  </ul>
</template>

<script lang="ts">
interface Projets {
  title: string
  image: string
  description: string
  created: number
}

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Projets',
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

</style>
