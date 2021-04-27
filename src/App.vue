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

html, body {
  font-family: Raleway-Regular, sans-serif;
}

a {
  color: white !important;
  text-decoration: none;
}

#app {
  font-family: Raleway-Regular, sans-serif;
}
</style>
