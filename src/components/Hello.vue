<template>
      <span id="hello" class="fixed top-1/2 sayHello">Say hello</span>
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

</style>
