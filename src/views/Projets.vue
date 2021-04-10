<template>
  <ul>
    <li>{{book.title}}</li>
  </ul>
  <h1>Projets</h1>
</template>

<script lang="ts">
interface Book {
  title: string
  author: string
  year: number
}

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Projets',
  data(){
    return{
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  }
})

</script>

<style scoped>

</style>
