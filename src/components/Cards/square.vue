<template>
  <div>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'square',
  data() {
    return {}
  },
  methods: {}

})
</script>

<style scoped>
div{
  background-color: #5e8cd2;
  animation: square-to-circle 2s 1s infinite alternate;
  opacity: 0.6;
  /* margin-bottom: 70%; */
}

@-webkit-keyframes square-to-circle {
  0% {
    border-radius: 0 0 0 0;
  }
  25% {
    border-radius: 50% 0 0 0;
  }
  50% {
    border-radius: 50% 50% 0 0;
  }
  75% {
    border-radius: 50% 50% 50% 0;
  }
  100% {
    border-radius: 50%;
  }
}

@keyframes square-to-circle {
  0% {
    border-radius: 0 0 0 0;
    background: #3b95d1;
  }
  25% {
    border-radius: 50% 0 0 0;
    background: #139ecb;
  }
  50% {
    border-radius: 50% 50% 0 0;
    background: #00a4c1;
  }
  75% {
    border-radius: 50% 50% 50% 0;
    background: #00adc1;
  }
  100% {
    border-radius: 50%;
    background: #00b6be;
  }
}

@keyframes square-to-circle {
  0% {
    border-radius: 0 0 0 0;
    background: #00bfb9;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 50% 0 0 0;
    background: #00cfc2;
    transform: rotate(45deg);
  }
  50% {
    border-radius: 50% 50% 0 0;
    background: #00dfc9;
    transform: rotate(90deg);
  }
  75% {
    border-radius: 50% 50% 50% 0;
    background: #00efce;
    transform: rotate(135deg);
  }
  100% {
    border-radius: 50%;
    background: #00ffd2;
    transform: rotate(180deg);
  }
}

/* Large devices (desktops, 992px and up) /
@media (min-width: 1024px) and (max-width: 1279px) {
  h1{
  right: 2em;
  }
  h3{
  right: 6rem;
  }
}

/ Extra large devices (large desktops, 1200px and up) */
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
/* Small devices (landscape phones, 340px and up) /
@media (min-width: 340px) and (max-width: 767px) {
  div {
    width: 150px;
    height: 150px;
  }
}

/ Medium devices (tablets, 768px and up) /
@media (min-width: 768px) and (max-width: 1023px) {
  div {
    width: 200px;
    height: 200px;
    margin: 0;
  }
}

/ Large devices (desktops, 992px and up) /
@media (min-width: 1024px) and (max-width: 1279px) {
  div {
    width: 200px;
    height: 200px;
  }
}

/ Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) {
  div {
    width: 200px;
    height: 200px;
  }
}

@media (min-width: 1536px) {
  div {
    width: 200px;
    height: 200px;
  }
}
</style>
