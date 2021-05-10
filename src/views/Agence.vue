<template>
  <agence2/>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import Agence2 from "@/components/Cards/Agence.vue"


export default defineComponent({
  name: 'Agence',
  components: {Agence2},
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
