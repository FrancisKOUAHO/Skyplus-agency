<template>
  <footer class='w-3/4 text-center border-grey p-4'>
    <div>
      <p>SKYPLUS © 2021 - Agence de communication et de création digitale</p>
    </div>
  </footer>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PiedsPage',
  components: {},
  data() {
    return {}
  }
})
</script>

<style scoped>
footer{
  background-image: linear-gradient(to right, rgb(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  position:absolute;
  bottom:0;
  text-align: left;
  padding-left: 2em;
}

p{
  color: #fff;
}

</style>
