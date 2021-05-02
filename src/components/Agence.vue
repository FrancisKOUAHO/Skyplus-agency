<template>
  <div class="flex justify-center">
    <div class="title_desc">
        <h1 class="text-6xl mt-12 relative fadeInUp" style="text-decoration: none; text-decoration-line: none">Notre histoire</h1>
        <h3 class="text-4xl relative text-right pl-10 fadeInUp">N’est pas <span class="h3bold">seulement</span> la notre, mais également la <span class="h3bold">votre</span></h3>
    </div>
  </div>
  <div class="flex justify-center agenceContent">
    <div class="content1 right-56 fadeInUp">
        <h4 class="text-4xl mb-5 text-right -mr-20 fadeInUp">Lorem ipsum dolor sit</h4>
        <p class="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi ligula,
            tincidunt eget placerat et, dignissim quis urna. In gravida vel magna at scelerisque.
            Fusce mollis dapibus nisl vestibulum molestie. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nisi ligula.
            </p>
        <p class="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi ligula,
            tincidunt eget placerat et, dignissim quis urna. In gravida vel magna at scelerisque.
            Fusce mollis dapibus nisl vestibulum molestie. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nisi ligula.
            </p>
        <p class="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi ligula,
            tincidunt eget placerat et, dignissim quis urna. In gravida vel magna at scelerisque.
            Fusce mollis dapibus nisl vestibulum molestie. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nisi ligula.
            </p>
    </div>
  </div>
  <div class="flex items-center justify-end agenceContent">
    <div class="content2 fadeInUp">
        <h4 class="text-4xl text-right mb-40 -mr-40 fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec nisi ligula, tincidunt eget placerat et,
          dignissim quis urna. </h4>
    </div>
    <div class="content3">
      <img class="agence_image mb-40 fadeInUp" src="../assets/image/agence_image1.png">
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Agence1',
  data() {
    return {}
  }
})
</script>

<style scoped>

h1, h3, h4, p {
    color: #fffefe;
}

h1 {
    font-family: Raleway-Bold,serif;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: .5s;
}

h3 {
    font-family: Raleway-Thin,sans-serif;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 1s;
}

h4 {
    font-family: Raleway-Bold;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 2s;
}

.h3bold {
    font-family: Raleway-Bold;
}

.content1 {
    background: rgba(255, 255, 255, 0.20);
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 1.5s;
    width: 28em;
    padding: 3em 2em;
    margin: 3em;
}

.content1 > p {
    font-family: Raleway-Thin;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 2.5s;
}

.content2{
  width: 28em;
  margin: 3em;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 3s;
  z-index: 1;
}

.content3{
  width: 50%;
}

.content3 .agence_image{
  width: 80%;
    -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 3.5s;
}

/* ANIMATION */

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    position: relative;
    top: 100px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0px;
    transform: translateY(0px);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    position: relative;
    top: 100px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0px;
    transform: translateY(0px);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

</style>
