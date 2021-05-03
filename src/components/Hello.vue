<template>
  <span id="myBtn" class="fixed top-1/2 sayHello"><a href="#open-modal">Say hello</a></span>
  <div id="open-modal" class="modal-window">
    <div>
      <a href="#modal-close" title="Fermer" class="modal-close">Fermer &times;</a>
      <form class="w-full max-w-lg ml-36" @submit.prevent="sendEmail">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Votre nom
            </label>
            <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick" type="text" v-model="name"
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              mail
            </label>
            <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email" type="email" v-model="email"
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Télephone
            </label>
            <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="tel" type="tel" v-model="tel"
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <div class="formfield-select">
              <div class="formfield-select--container">
                <select id="mon_select">
                  <option value="">Qu'est-ce qui vous amène ?</option>
                  <option value="projet">J'ai un projet à vous présenter</option>
                  <option value="rencontre">J'aimerais vous rencontrer</option>
                  <option value="collaborer">Je veux collaborer avec vous</option>
                  <option value="job">Je veux postuler</option>
                  <option value="stage">Je recherche un stage</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Message
            </label>
            <textarea
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message" v-model="message"></textarea>
            <p class="text-white text-xs italic">message d'erreur</p>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
                class=" ml-60 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                type="submit" style="background-color: white !important;" value="Send"
            >
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
import emailjs from 'emailjs-com';

export default defineComponent({
  name: "Hello",
  data() {
    return {
      name: '',
      email: '',
      tel: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_l8twccb', 'template_q8cvqtb', e.target,
            'user_IIORNjcJYo0Dcw6YZHP4E', {
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      this.name = ''
      this.email = ''
      this.message = ''
    },
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

.modal-window > div {
  width: 60%;
  position: relative;
  margin: 10% auto;
  padding: 2rem;
  background: #00adc1;
  color: #444;
  bottom: 16.5%;
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

.formfield-select {
  position: relative;
}

.formfield-select--container {
  position: relative;
  background-color: #fff;
  border: #00ffd2 1px solid;
  margin: 0 0 1.5em 0;
  overflow: hidden;
}

.formfield-select--container select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 110%;
  height: auto;
  border: 0;
  margin: 0;
  padding: .75em;
  border-radius: 0;
  overflow: hidden;
  text-overflow: ellipsis;


}

.formfield-select--container::after {
  /* Le pointeur du select */
  content: '';
  position: absolute;
  top: 50%;
  margin-top: -3px;
  right: .75em;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-top-color: #444;
  border-width: 6px;
  border-style: solid;
  pointer-events: none;
}

</style>
