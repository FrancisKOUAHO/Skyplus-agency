<template>
  <div class="container_bloc2 fadeInLeft">
    <span class="titre_partenaire">Ils nous ont fait confiance</span>
    <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2 mt-4">

      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>
      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>
      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>
      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>
      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>
      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>
      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>
      <div
          class="my-2 px-2 w-1/4 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
        <img src="../assets/image/partenaire.png">
      </div>

    </div>
  </div>
</template>


<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'CreationBlocBottom',
  data() {
    return {}
  }
})
</script>

<style scoped>

.container_bloc2 {
  background: #fffefe60;
  /* padding: 3em 3em 3em 0em; */
  width: 70%;
  padding: 3em 3em 3em 49em;
  -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 3s;
}

.titre_partenaire {
  padding: 0 7em;
  color: #fffefe;
  font-size: 1.2rem;
}

/* Animation FadeInLeft class "FadeInLeft"*/

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    position: relative;
    left: -100px;
  }
  100% {
    opacity: 1;
    left: 100px;
    /* transform: translateX(0px); */
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    position: relative;
    left: -100px;
  }
  100% {
    opacity: 1;
    left: 100px;
    /* transform: translateX(0px); */
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

</style>
