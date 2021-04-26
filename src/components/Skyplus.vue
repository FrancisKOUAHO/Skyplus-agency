<template>
  <div class="flex items-center pl-40 homeContent">
  <div>
    <img class="visuel_plus fadeInUp" src="../assets/image/image_plus_home.png">
  </div>
  <div class="title_desc">
    <h1 class="text-9xl mt-12 relative fadeInRight" style="text-decoration: none; text-decoration-line: none">SKYPLUS</h1>
    <h3 class="text-5xl relative right-28 fadeInRight">Sky’s not the limit </h3>
  </div>
  <div>
    <square/>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Square from "@/components/square.vue";


export default defineComponent({
  name: 'Skyplus',
  components: {Square}, 
  data() {
    return {}
  }
})
</script>

<style scoped>
img {
  width: 27em;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.homeContent{
  margin-top: 7em;
}

/* Animation FadeInUp class "FadeInUp"*/

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

/* Animation FadeInRight class "FadeInRight"*/

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    position: relative;
    left: 100px;
  }
  100% {
    opacity: 1;
    position: relative;
    left: 0px;
    transform: translateX(0px);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    position: relative;
    left: 100px;
  }
  100% {
    opacity: 1;

    transform: translateX(0px);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

.title_desc{
  color: #fffefe;
}

h1{
  right: 2em;
  font-family: Raleway-Bold;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 2s;
}

h3 {
  top: 3.7rem;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 4s;
}


</style>
