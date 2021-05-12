<template>
  <hello/>
  <creation-bloc-top/>
  <skyplus style="margin-top: 35%"/>
  <gallery2/>
  <points style="opacity: 0.2;"/>
  <creation-bloc-bottom/>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import Skyplus from "@/components/Cards/Skyplus.vue";
import Hello from "@/components/Barres/Hello.vue";
import CreationBlocTop from "@/components/Cards/CreationBlocTop.vue";
import CreationBlocBottom from "@/components/Cards/CreationBlocBottom.vue";
import Gallery2 from "@/components/Gallery/Gallery.vue";
import Points from "@/components/Points.vue";


export default defineComponent({
  name: 'Accueil',
  components: {Points, Gallery2, CreationBlocBottom, CreationBlocTop, Hello, Skyplus},
  data() {
    return {}
  },
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color1')
  },
  methods: {}
})
</script>

<style scoped>
.square {
  margin-left: 70%;
  margin-top: -35%
}

.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}

.btn-placement {
  margin-left: 28%;
  width: 14%;
  margin-top: 1%;
  background-image: linear-gradient(to right, #E18CFF, #E18CFF, #C489F0, #C489F0, #C489F0,
  #C489F0, #AF86E5, #AF86E5, #7E80CB);
}

img {
  float: right;
  width: 10px;
  margin-top: 4.5%;
}
</style>
