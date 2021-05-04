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
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

h3{
    font-size: 2rem;
    -webkit-animation-duration: 2s;
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 1.5s;
}

h5{
    font-size: 1.5rem;
    text-align: right;
    margin-top: 1.5em;
    padding-left: 4.5em;
    -webkit-animation-duration: 2s;
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 2s;
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
</style>