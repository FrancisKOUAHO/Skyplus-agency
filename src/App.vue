<template>
  <nav-bar/>
  <router-view/>
  <pieds-page/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "@/components/NavBars/NavBar.vue";
import PiedsPage from "@/components/Footers/PiedsPage.vue";

export default defineComponent({
  name: 'App',
  components: {PiedsPage, NavBar},
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || ' ';
    },
  },
});
</script>

<style>
@font-face {
  font-family: 'Raleway-Regular';
  src: url('assets/fonts/Raleway-VariableFont_wght.ttf') format('truetype');
}

@font-face {
  font-family: 'Raleway-Bold';
  src: url('assets/fonts/Raleway-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Raleway-Thin';
  src: url('assets/fonts/Raleway-Thin.ttf') format('truetype');
}

html {
  height: 100%;
}

body {
  font-family: 'Raleway', 'Arial', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

a {
  color: white;
  text-decoration: none;
}

#app {
  font-family: Raleway-Regular, sans-serif;
  position: relative;
}

button:disabled {
  cursor: not-allowed;
  color: grey !important;
}
.loader {
  width: 25px;
  height: 25px;
}
</style>
