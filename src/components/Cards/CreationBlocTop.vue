<template>
<div class="container_bloc1 fadeInUp">
  <h3 class="fadeInBottom">Libre comme une pétale de cerisier dans l’air</h3>
  <h5 class="fadeInBottom">Nous sommes ouvert à la <span class="h5bold">créativité</span> de chacuns</h5>
</div>
</template>


<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'CreationBlocTop',
  data() {
    return {}
  }
})
</script>

<style scoped>

.container_bloc1{
    background: #fffefe60;
    padding: 17em 3em 2em 3em;
    width: 30%;
    position: absolute;
    top: 0;
    left: 30em;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

h3{
    font-size: 2rem;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 1s;
}

h5{
    font-size: 1.5rem;
    text-align: right;
    margin-top: 1.5em;
    padding-left: 4.5em;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 1.25s;
}

h3, h5, .h5bold{
    color: #fffefe;
} 

h3, .h5bold{
    font-family: Raleway-Bold;
}

/* FADEINUP */

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    position: absolute;
    top: -100px;
  }
  100% {
    opacity: 1;
    position: absolute;
    top: 0px;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    position: absolute;
    top: -100px;
  }
  100% {
    opacity: 1;
    position: absolute;
    top: 0px;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

/* FADEINBOTTOM */

@-webkit-keyframes fadeInBottom {
  0% {
    opacity: 0;
    position: relative;
    top: 25px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0px;
    /* transform: translateY(-100px); */
  }
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    position: relative;
    top: 25px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0px;
    /* transform: translateY(-100px); */
  }
}

.fadeInBottom {
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
}


/* Small devices (landscape phones, 340px and up) */
@media (min-width: 340px) and (max-width: 767px){
  .container_bloc1{
      background: none;
      padding: 2em;
      width: 100%;
      left: 0em;
      margin: 15em auto 0 auto;
  }

  h5{
    padding-left: 0;
  }

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {
  .container_bloc1{
      background: none;
      padding: 2em 10em;
      width: 100%;
      left: 0em;
      margin: 15em auto 0 auto;
  }

  h5{
    padding-left: 0;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) and (max-width: 1279px) {

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) {

}

@media (min-width: 1536px) {

}


</style>