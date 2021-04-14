<template>
  <div class="all-square">
    <div class="div-square">
      <div class="square square-blue" @click="printToConsole"></div>
      <div class="square square-black"></div>
      <div class="square square-pink"></div>
    </div>

    <div class="div-square">
      <div class="square square-black"></div>
      <div class="square square-green"></div>
      <div class="square square-black"></div>
    </div>

    <div class="div-square">
      <div class="square square-orange"></div>
      <div class="square square-black"></div>
      <div class="square square-green"></div>
    </div>

  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'square',
  data() {
    return {}
  },
  methods: {
    printToConsole(): void {
      let allQuares = document.getElementsByClassName('square')
      for (const allQuare of allQuares) {
        console.log(allQuare)
      }
    }
  }

})
</script>

<style scoped>

.all-square {
  position: absolute;
  top: 50%;
  left: 57%;
  transform: translate(10%, -70%);
}

.square {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 15px;
  border: 0.7px solid whitesmoke;
}

.square::before {
  content: '';
  display: inline-block;
  width: 50px;
  height: 20px;
  transform: skewX(-40deg);
  position: absolute;
  top: -20px;
  left: 8px;
  border: 0.7px solid whitesmoke;
}

.square::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 50px;
  transform: skewY(-50deg);
  position: absolute;
  top: -10px;
  left: 100%;
  border: 0.7px solid whitesmoke;
}

.div-square {
  display: flex;
}

.square-black {
  background-color: #0d060e;
}

.square-black::after {
  background-color: #0d060e;
}

.square-black::before {
  background-color: #0d060e;
}


.square-blue {
  background-color: #122F67;
}

.square-blue::after {
  background-color: #122F67;
}

.square-blue::before {
  background-color: #122F67;
}

.square-pink {
  background-color: #FF2E63;
}

.square-pink::after {
  background-color: #FF2E63;
}

.square-pink::before {
  background-color: #FF2E63;
}

.square-green {
  background-color: #1b678d;
}

.square-green::after {
  background-color: #1b678d;
}

.square-green::before {
  background-color: #1b678d;
}

.square-orange {
  background-color: #CD4B1D;
}

.square-orange::after {
  background-color: #CD4B1D;
}

.square-orange::before {
  background-color: #CD4B1D;
}

</style>
