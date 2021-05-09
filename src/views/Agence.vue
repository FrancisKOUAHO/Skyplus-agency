<template>
  <agence/>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import Agence from "@/components/Cards/Agence.vue"


export default defineComponent({
  name: 'Agence',
  components: {Agence},
  data() {
    return {
      color: '#333'
    }
  },
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color2')
  }
})
</script>

<style scoped>
</style>
