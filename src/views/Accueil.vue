<template>
  <div class=" body-color">
    <h1>Accueil jacky</h1>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Accueil',
  data() {
    return {}
  }
})
</script>

<style scoped>
.body-color {
  background-image: linear-gradient(to left bottom, #7e80cb, #5e8cd2, #3b95d1, #139ecb, #00a4c1,
  #00adc1, #00b6be, #00bfb9, #00cfc2, #00dfc9, #00efce, #00ffd2);
  min-height: 100vh;
}

</style>
