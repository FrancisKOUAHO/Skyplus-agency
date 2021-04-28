<template>
  <router-view/>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent({
  name: 'App',
  data() {
    return {}
  },
  watch: {
    '$route'(to, from) {
      document.title = to.meta.title || 'Your Website'
    }
  },
})
</script>

<style>
@font-face {
  font-family: "Raleway-Regular";
  src: url("assets/fonts/Raleway-VariableFont_wght.ttf") format("truetype");
}

@font-face {
  font-family: "Raleway-Bold";
  src: url("assets/fonts/Raleway-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "Raleway-Thin";
  src: url("assets/fonts/Raleway-Thin.ttf") format("truetype");
}

body,html,#app{
  width: 100%;
  height: 100%;
}

</style>
