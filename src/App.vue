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

body{
  font-family: "Raleway","Arial",sans-serif;
  font-weight: 300;
  font-size: .8rem;
  overflow-x: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
