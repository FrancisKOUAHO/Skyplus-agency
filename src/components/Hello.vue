<template>
  <div v-on:click="toggleModal()">
    <div id="hello">
      <span style="margin-top: 20%">Say hello</span>
    </div>
    <div>
      <img src="../assets/image/right-arrow.svg" alt="" width="25"
           style="margin-left: 96.6%; margin-top: -4.5%; color: white; transform: rotate(-90deg);">
    </div>
    <div v-if="showModal"
         class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50  justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl" style="width: 100% !important;">
          <div class="relative p-6 flex-auto" style="background: linear-gradient(45deg, #1b678d, #1b678d);">
            <contact-form/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import ContactForm from "@/components/ContactForm";

export default defineComponent({
  name: "Hello",
  components: {ContactForm},
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
#hello {
  position: fixed;
  z-index: 120;
  right: 39px;
  top: 30%;
  -webkit-transform: translateY(-50%) rotate(-90deg);
  transform: translateY(-50%) rotate(-90deg);
  cursor: pointer;
  margin-right: -2.5rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}


#hello span {
  color: #fff;
  font-size: .6rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .2rem;
  line-height: .8rem;
}

#hello {
  cursor: pointer;
}

#hello span::after {
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 1px;
  background: #fff;
  top: 50%;
  margin-top: -1px;
  left: 1rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

#hello span {
  color: #fff;
  font-size: .6rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .2rem;
  line-height: .8rem;
}
</style>
