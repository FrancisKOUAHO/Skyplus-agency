<template>
  <nav-bar/>
  <agence1/>
  <pieds-page/>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBars/NavBar.vue";
import Agence1 from "@/components/Cards/Agence.vue"
import PiedsPage from "@/components/Footers/PiedsPage.vue";

export default defineComponent({
  name: 'Agence',
  components: {PiedsPage, NavBar, Agence1},
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
