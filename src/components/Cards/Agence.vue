<template>
  <div class="flex justify-center">
    <div class="title_desc">
        <h1 class="text-6xl mt-12 relative fadeInUp" style="text-decoration: none; text-decoration-line: none">Notre histoire</h1>
        <h3 class="text-4xl relative text-right pl-10 fadeInUp">N’est pas <span class="h3bold">seulement</span> la notre, mais également la <span class="h3bold">votre</span></h3>
    </div>
  </div>
  <div class="flex justify-center agenceContent">
    <div class="content1 right-56 fadeInUp">
        <h4 class="text-4xl text-2xl mb-5 text-right -mr-20 fadeInUp">Lorem ipsum dolor sit</h4>
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
        <h4 class="text-4xl text-right fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec nisi ligula, tincidunt eget placerat et,
          dignissim quis urna. </h4>
    </div>
    <div class="content3">
      <img class="agence_image mb-40 fadeInUp" src="../../assets/image/agence_image1.png">
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
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 3s;
  z-index: 1;
}

.content3 .agence_image{
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

/* Small devices (landscape phones, 340px and up) */
@media (min-width: 340px) and (max-width: 767px){ 
  .title_desc{
    padding: 1rem;
  }
  h1{
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  h3{
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-top: 2rem;
  }
  .content1 h4{
    margin: 2rem -1rem 2rem 0;
  }
  .content1{
    margin: 3em 3em 3em 0;
    left: 0;
  }
  .content1 > p {
    font-size: 1rem;
    padding: 0 1rem 1rem 1rem;
  }

  .content2{
    margin: 0;
    background-image: url("../../assets/image/agence_image1.png");
    background-size: 150%;
    background-repeat: no-repeat;
    background-position-y: 0px;
    width: 100%;
  }

  .content2 h4 {
    margin-bottom: 10rem;
    margin-right: -40rem;
    margin: 0;
    padding: 4rem 2rem 15.25rem 0;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .content3{
    display: none;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) { 
  .title_desc{
    margin: 0 3rem 3rem 3rem;
  }
  .agenceContent{
    justify-content: flex-start;
  }
  .content1{
    width: 60%;
    left: 0;
  }
  .content1 h4{
    margin: 2rem -5rem 2rem 0;
  }

  .content1 p{
    font-size: 1rem;
    padding: 0 2rem 1rem 2rem;
  }
  .content2{
    margin: 7rem 0 12rem 15rem;
    width: 100%;
    background-image: url(/img/agence_image1.a14984af.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 0px;
    padding: 5em 20em 5em 3em;
  }

  .content2 h4{
    margin-left: -5em;
  }
  .content3{
    display: none;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) and (max-width: 1279px) { 

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) { 
  
}

@media (min-width: 1536px) { 
  .content1{
    width: 35em;
    padding: 3em 2em;
    margin: 3em;
  }
  .content1 > p {
    font-size: 1rem;
  }
  .content2{
    width: 30em;
    margin: 5em -6em 13em 0px;
  }
  .content3{
    margin-top: 5em;
    width: 50%;
  }

  .content3 .agence_image{
    width: 80%;
  }
}

</style>
