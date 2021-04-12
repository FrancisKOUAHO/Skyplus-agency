<template>
  <footer class='w-full text-center border-grey p-4'>
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
  background-image: linear-gradient(to left bottom, rgba(255,0,0,0), rgba(255,0,0,0.1));
  width: 100%;
  position:absolute;
  bottom:0;
}

p{
  color: #fff;
  margin-right: 64%;
}

</style>
