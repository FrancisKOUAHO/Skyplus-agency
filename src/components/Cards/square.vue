<template>
  <div class="hoja">
    <span id="hoja-1" >Francis</span>
    <span id="hoja-2" v-if="show">Jacky</span>
    <span id="hoja-3" v-if="show">Arash</span>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: ["hoja-1", "hoja-2", "hoja-3"],
  name: 'square',
  data() {
    return {
      show: false,
      timeout: null
    }
  },
})
</script>

<style scoped>
.hoja {
  color: #dcdce2;
  position: absolute;
  top: 22%;
  left: 84%;
  margin-left: -140px;
  margin-top: -140px;
  width: 280px;
  height: 280px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 35px;
  line-height: 280px;
  -webkit-font-smoothing: antialiased;
}

.hoja:after,
.hoja:before {
  content: "";
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
}

.hoja:after {
  box-shadow: inset 0 17.5px 0 rgba(250, 250, 0, 0.6), inset 17.5px 0 0 rgba(250, 200, 0, 0.6), inset 0 -17.5px 0 rgba(250, 150, 0, 0.6), inset -17.5px 0 0 rgba(250, 100, 0, 0.6);
  -webkit-animation: rotar 2s -0.5s linear infinite;
  animation: rotar 2s -0.5s linear infinite;
}

.hoja:before {
  box-shadow: inset 0 17.5px 0 rgba(0, 250, 250, 0.6), inset 17.5px 0 0 rgba(0, 200, 200, 0.6), inset 0 -17.5px 0 rgba(0, 150, 200, 0.6), inset -17.5px 0 0 rgba(0, 200, 250, 0.6);
  -webkit-animation: rotarIz 2s -0.5s linear infinite;
  animation: rotarIz 2s -0.5s linear infinite;
}

@-webkit-keyframes rotar {
  0% {
    transform: rotateZ(0deg) scaleX(1) scaleY(1);
  }
  50% {
    transform: rotateZ(180deg) scaleX(0.82) scaleY(0.95);
  }
  100% {
    transform: rotateZ(360deg) scaleX(1) scaleY(1);
  }
}

@keyframes rotar {
  0% {
    transform: rotateZ(0deg) scaleX(1) scaleY(1);
  }
  50% {
    transform: rotateZ(180deg) scaleX(0.82) scaleY(0.95);
  }
  100% {
    transform: rotateZ(360deg) scaleX(1) scaleY(1);
  }
}

@-webkit-keyframes rotarIz {
  0% {
    transform: rotateZ(0deg) scaleX(1) scaleY(1);
  }
  50% {
    transform: rotateZ(-180deg) scaleX(0.95) scaleY(0.85);
  }
  100% {
    transform: rotateZ(-360deg) scaleX(1) scaleY(1);
  }
}

@keyframes rotarIz {
  0% {
    transform: rotateZ(0deg) scaleX(1) scaleY(1);
  }
  50% {
    transform: rotateZ(-180deg) scaleX(0.95) scaleY(0.85);
  }
  100% {
    transform: rotateZ(-360deg) scaleX(1) scaleY(1);
  }
}

</style>
