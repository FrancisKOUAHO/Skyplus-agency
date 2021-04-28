<template>
  <div class="flex justify-center">
    <div class="title_desc">
        <h1 class="text-6xl mt-12 relative fadeInUp" style="text-decoration: none; text-decoration-line: none">Notre histoire</h1>
        <h3 class="text-4xl relative text-right pl-10 fadeInUp">N’est pas <span class="h3bold">seulement</span> la notre, mais également la <span class="h3bold">votre</span></h3>
    </div>
  </div>
  <div class="flex justify-center agenceContent">
    <div class="content1 fadeInUp">
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
    <div class="content2"></div>
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
    animation-delay: 1s;
}

h3 {
    font-family: Raleway-Thin,sans-serif;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 2s;
}

h4 {
    font-family: Raleway-Bold;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 4s;
}

.h3bold {
    font-family: Raleway-Bold;
}

.agenceContent > div{
    width: 28em;
    padding: 3em 2em;
    margin: 3em;
}

.content1 {
    background: rgba(255, 255, 255, 0.20);
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 3s;
}

.content1 > p {
    font-family: Raleway-Thin;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 5s;
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
