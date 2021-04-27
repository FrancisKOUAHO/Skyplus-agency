<template>
  <span id="myBtn" class="fixed top-1/2 sayHello"><a href="#open-modal">Say hello</a></span>
  <div id="open-modal" class="modal-window">
    <div>
      <a href="#modal-close" title="Fermer" class="modal-close">Fermer &times;</a>
      <form class="w-full max-w-lg ml-36">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Votre nom
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text">
            <p class="text-xs italic text-white">message d'erreur</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              mail
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
            <p class="text-white text-xs italic">message d'erreur</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Télephone
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="number">
            <p class="text-white text-xs italic">message d'erreur</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Message
            </label>
            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            <p class="text-white text-xs italic">message d'erreur</p>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button class=" ml-60 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="button" style="background-color: white !important;">
              Envoyer
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Hello",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    }
  }
})
</script>

<style scoped>
.sayHello {
  z-index: 120;
  -webkit-transform: translateY(-50%) rotate(-90deg);
  transform: translateY(-50%) rotate(90deg);
  cursor: pointer;
  margin-right: -2.5rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

.sayHello {
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .2rem;
  line-height: .8rem;
  margin-top: -5em;
  left: -1em;
}

.sayHello::after {
  content: '';
  position: absolute;
  width: 5em;
  height: 2px;
  background: #fff;
  top: 0.5em;
  left: 6rem;
  transition: all .25s ease;
}

.modal-window {
  position: fixed;
  background-color: rgba(200, 200, 200, 0.75);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.modal-window:target {
  opacity: 1;
  pointer-events: auto;
}

.modal-window>div {
  width: 60%;
  position: relative;
  margin: 10% auto;
  padding: 2rem;
  background: #00adc1;
  color: #444;
  bottom: 14%;
}

.modal-window header {
  font-weight: bold;
}

.modal-close {
  color: black !important;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
}

.modal-close:hover {
  color: black !important;
}

.modal-window h1 {
  font-size: 150%;
  margin: 0 0 15px;
}

</style>
