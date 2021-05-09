<template>
  <creation-bloc-top/>
  <gallery/>
  <creation-bloc-bottom/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CreationBlocTop from "@/components/Cards/CreationBlocTop.vue";
import Gallery from "@/components/Gallery/Gallery.vue";
import CreationBlocBottom from "@/components/Cards/CreationBlocBottom.vue";


export default defineComponent({
  name: 'Creations',
  components: {CreationBlocTop, CreationBlocBottom, Gallery},
  data() {
    return {}
  },
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color3 creationHeight')
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded');
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
  }
})
</script>

<style>

.creationHeight{
  height: 190%;
}
</style>
