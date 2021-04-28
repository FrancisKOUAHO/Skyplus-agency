<template>
  <nav-bar/>
  <agence1/>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import Agence1 from "@/components/Agence.vue"

export default defineComponent({
  name: 'Agence',
  components: { NavBar, Agence1},
  data() {
    return {}
  }
})
</script>

<style>
body {
  background-image: linear-gradient(to left bottom, #355EF2, #355EF2, #355EF2,
  #72BFD4, #72BFD4);

}
</style>
