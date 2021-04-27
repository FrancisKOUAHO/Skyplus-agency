<template>
  <div class="body-color">
    <nav-bar/>
    <contact-vue/>
    <div class="container displayed" style="margin-top: -10%">
      <h1 style="font-weight: 600; font-size: 48px; line-height: 1.15; color: white"><span>Nous gravitons dans</span>
      </h1>
      <span style="font-weight: 600; font-size: 48px; line-height: 1.15; color: white">les meilleures sphères</span>
    </div>
    <reseau-sociaux/>
    <pieds-page/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import PiedsPage from "@/components/PiedsPage.vue";
import ContactVue from "@/components/ContactVue.vue";
import ReseauSociaux from "@/components/ReseauSociaux.vue";

export default defineComponent({
  name: 'Contact',
  components: {ReseauSociaux, ContactVue, PiedsPage, NavBar},
  data() {
    return {}
  }
})
</script>

<style scoped>
.body-color {
  background-image: linear-gradient(to left bottom, #C94F0A, #C94F0A, #EA6232,
  #F3B248, #F3B248);
  min-height: 100vh;
}

#contact .container.displayed .baseline {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .9s;
  transition: all .25s ease .9s;
}

#contact .baseline .action-list {
  position: relative;
  overflow: hidden;
  line-height: 1.1rem;
  height: 1.1rem;
}

.gradient-text {
  background: #4dbeb9;
  background: -webkit-gradient(linear, left top, right top, from(#4dbeb9), to(#a571bf));
  background: linear-gradient(to right, #4dbeb9 0, #a571bf 100%);
  background-clip: border-box;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$turquoise', endColorstr='#a571bf', GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  display: inline-block;
  vertical-align: middle;
}

#contact .container {
  color: #000;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

.container {
  max-width: 780px;
  margin: 0 auto;
  padding-top: 12rem;
}

#contact .container.displayed h1 {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .8s;
  transition: all .25s ease .8s;
}

#contact h1 {
  position: relative;
  z-index: 8;
  color: #000;
  padding: 1rem;
  position: relative;
  opacity: 0;
  -webkit-transform: translateX(-1rem);
  transform: translateX(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .container .content {
  position: relative;
  z-index: 8;
  padding: 0 1rem 5rem;
}

#contact .container.displayed .baseline {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .9s;
  transition: all .25s ease .9s;
}

#contact .baseline {
  line-height: 1.3;
  opacity: 0;
  -webkit-transform: translateX(-1rem);
  transform: translateX(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .contacts {
  position: relative;
  margin-top: 9rem;
  zoom: 1;
}

#contact .container {
  color: #000;
}

#contact .baseline .action-list {
  position: relative;
  overflow: hidden;
  line-height: 1.1rem;
  height: 1.1rem;
}

#contact .baseline .action-list div {
  position: absolute;
  left: 0;
  line-height: 1.1rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  bottom: -1.1rem;
  margin-bottom: 2.2rem;
  -webkit-transition: margin-bottom .6s ease, bottom 0s .6s;
  transition: margin-bottom .6s ease, bottom 0s .6s;
}

#contact .contacts {
  position: relative;
  margin-top: 9rem;
  zoom: 1;
}

#contact .container.displayed .contacts .col:nth-child(1) {
  -webkit-transition: all .25s ease 1.1s;
  transition: all .25s ease 1.1s;
}

#contact .container.displayed .contacts .col {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

#contact .contacts .col {
  float: left;
  width: 28%;
  opacity: 0;
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .container.displayed .contacts .col:nth-child(4) {
  -webkit-transition: all .25s ease 1.4s;
  transition: all .25s ease 1.4s;
}

#contact .container.displayed .contacts .col {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

#contact .contacts .col.-little {
  width: 16%;
}

#contact .contacts .col {
  float: left;
  width: 28%;
  opacity: 0;
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .contacts .text {
  height: 3rem;
}

#contact .contacts .button {
  position: relative;
  display: block;
  white-space: nowrap;
}

#contact .contacts .social-button {
  width: 2.25rem;
  height: 2.25rem;
  display: inline-block;
  border-radius: 100%;
  border: solid 1px #000;
  margin: 0 .2rem;
  font-size: 0;
  position: relative;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

#contact .container.displayed .baseline {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .9s;
  transition: all .25s ease .9s;
}

#contact .baseline {
  line-height: 1.3;
  opacity: 0;
  -webkit-transform: translateX(-1rem);
  transform: translateX(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .baseline .action-list {
  position: absolute;
  left: 0;
  line-height: 1.1rem;
}

#contact .baseline .action-list div {
  position: absolute;
  left: 0;
  line-height: 1.1rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  bottom: -1.1rem;
  margin-bottom: 2.2rem;
  -webkit-transition: margin-bottom .6s ease, bottom 0s .6s;
  transition: margin-bottom .6s ease, bottom 0s .6s;
}

</style>
