<template>
  <div class="container_bloc2 text-center fadeInBottom">
    <span class="titre_partenaire">Ils nous ont fait confiance</span>
      <div class="flex justify-center items-center container_logo flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3 xl:-mx-3">

        <div v-for="(logo, index) in logos" :key="index" class="container_image my-3 px-3 w-1/6 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/6 xl:my-3 xl:px-3 xl:w-1/6">
          <img v-bind:src="logo.src" :alt="logo.alt">
        </div>

      </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'CreationBlocBottom',
  data() {
    return {
      logos: [
        {
          src: require('@/assets/image/site_gallery/logo/logo_francis_2.png'),
          alt: "logo Francis KOUAHO"
        },
        {
          src: require('@/assets/image/site_gallery/logo/logoauxfinsgastronomes.png'),
          alt: "logo aux fins gastronomes"
        },
        {
          src: require('@/assets/image/site_gallery/logo/logocalifor.png'),
          alt: "logo califor"
        },
        {
          src: require('@/assets/image/site_gallery/logo/logokclm.png'),
          alt: "logo KCLM"
        }
      ]
    }
  }
})
</script>

<style scoped>

.container_bloc2 {
  background: #fffefe36;
  /* padding: 3em 3em 3em 0em; */
  width: 40%;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 2.5s;
  margin: 10em auto;
  padding: 3em 5em;
}

.titre_partenaire {
  /* padding: 0 7em; */
  color: #fffefe;
  font-size: 1.2rem;
}

.container_logo{
  margin-top: 1em;
}

.container_image{
  width: 25%;
}

.img{
  width: 100%;
  height: auto;
}

/* ANIMATION FADE IN BOTTOM */

@-webkit-keyframes fadeInBottom {
  0% {
    opacity: 0;
    position: relative;
    top: 50px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0;
    /* transform: translateY(-100px); */
  }
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    /* position: absolute; */
    margin-top: 15em;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-top: 13em;
    /* transform: translateY(-100px); */
  }
}

.fadeInBottom {
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
}


/* Small devices (landscape phones, 340px and up) */
@media (min-width: 340px) and (max-width: 767px) {

  .container_bloc2 {
    width: 90%;
    margin: auto;
    padding: 3em 4em;
  }

  .container_image{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em 5em;
  }

  .img{
    max-width: 40%;
  }
  @keyframes fadeInBottom {
  0% {
    opacity: 0;
    /* position: absolute; */
    margin-top: 4em;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-top: 2em;
    margin-bottom: 15em;
    /* transform: translateY(-100px); */
  }
}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {
  .container_bloc2 {
    width: 80%;
    margin: auto;
    padding: 3em 4em;
  }

  .container_image{
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 1em 5em;
  }

  .img{
    max-width: 40%;
  }
  @keyframes fadeInBottom {
  0% {
    opacity: 0;
    /* position: absolute; */
    margin-top: 12em;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-top: 10em;
    margin-bottom: 12em;
    /* transform: translateY(-100px); */
  }
}

  .titre_partenaire{
    font-size: 1.5rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) and (max-width: 1279px) {

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) {

}

@media (min-width: 1536px) {
  
  .titre_partenaire{
    font-size: 1.7rem;
  }

}

</style>
