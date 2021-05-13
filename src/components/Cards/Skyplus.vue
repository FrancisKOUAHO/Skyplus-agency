<template>
  <div class="flex justify-center items-center sm:flex-col lg:flex-row homeContent">
    <div class="container_plus">
      <img class="visuel_plus fadeInUp" src="../../assets/image/image_plus_home.png">
    </div>
    <div class="title_desc">
      <h1 class="fadeInRight">SKYPLUS</h1>
      <h3 class="fadeInRight">Sky’s not the limit</h3>
    </div>
    <square/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Square from "@/components/Cards/square.vue";


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
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.homeContent {
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
    /* position: absolute; */
    margin-right: -100px;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-right: 0;
    /* transform: translateY(-100px); */
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    /* position: absolute; */
    margin-right: -100px;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-right: 0;
    /* transform: translateY(-100px); */
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

.title_desc {
  color: #fffefe;
}

h1 {
  font-family: Raleway-Bold;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 1s;
  font-size: 8rem;
  line-height: 1;
  margin-top: 3rem;
  position: relative;
  text-decoration: none;
  text-decoration-line: none;
}

h3 {
  font-family: Raleway-Thin;
  top: 1.7rem;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 2s;
  font-size: 3rem;
  line-height: 1;
  position: relative;
}

/* Small devices (landscape phones, 340px and up) */
@media (min-width: 340px) and (max-width: 767px) {
  .homeContent {
    margin-top: 0;
    margin-top: 13em;
  }

  .container_plus {
    display: none;
  }

  .title_desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5em;
  }

  h1 {
    width: 100%;
    font-size: 4rem;
    text-align: center;
  }

  h3 {
    top: 0.7rem;
    font-size: 2rem;
    text-align: center;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {
  .homeContent {
    margin-top: 0;
    margin-top: 13em;
  }

  img {
    width: 22em;
  }

  .title_desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 7em;
  }

  h1 {
    width: 100%;
    font-size: 6rem;
    text-align: center;
    margin-top: 0.2em;
  }

  h3 {
    top: 0.7rem;
    font-size: 2rem;
    text-align: center;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  h1{
    right: 2em;
  }
  h3{
    right: 6rem;
  }
}

@media (min-width: 1280px) and (max-width: 1535px) {
  h1{
    right: 2em;
  }
  h3{
    right: 6rem;
  }
}

@media (min-width: 1536px) {
  h1{
    right: 2em;
  }
  h3{
    right: 6rem;
  }

}
</style>
