<template>
    <info-legal/>
    <hello/>
</template>

<script lang="ts">


import {defineComponent} from 'vue'
import Hello from "@/components/Barres/Hello.vue";
import InfoLegal from "@/components/InfoLegal/InfoLegal.vue";

export default defineComponent({
  name: 'Accueil',
  components: {Hello, InfoLegal},
  data() {
    return {}
  },
  setup(){
    let body = document.querySelector('body');
    body?.setAttribute('class','body-color3')
  },
  methods: {}
})
</script>

<style scoped>
.pieds-page{
  margin-bottom: -30%;
}

</style>
