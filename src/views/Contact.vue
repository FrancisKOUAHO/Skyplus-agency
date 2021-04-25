<template>
  <div class="body-color">
    <nav-bar/>
    <contact-vue/>
    <div>
      <h1  style="color: white; font-weight: 600; font-size: 48px; line-height: 1.15;">Nous gravitons dans</h1>
      <h1  style="color: white; font-weight: 600; font-size: 48px; line-height: 1.15;">les meilleures sphères</h1>
      <div>
        <span>Si vous souhaitez nous contacter pour</span>
        <div class="action-list">
          <div class="gradient-text">nous briefer</div>
          <div class="gradient-text">dire bonjour</div>
          <div class="gradient-text">rejoindre l'équipe</div>
          <div class="gradient-text">réserver un bouchon</div>
          <div class="gradient-text">prendre un café</div>
          <div class="gradient-text active">faire une partie de baby</div>
          <div class="gradient-text">grimper dans la navette</div>
          <div class="gradient-text">devenir membre de la galaxie</div>
          <div class="gradient-text">monter un projet sur Mars</div>
        </div>
      </div>
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
  background: -webkit-gradient(linear,left top,right top,from(#4dbeb9),to(#a571bf));
  background: linear-gradient(to right,#4dbeb9 0,#a571bf 100%);
  background-clip: border-box;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$turquoise',endColorstr='#a571bf',GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  display: inline-block;
  vertical-align: middle;
}
</style>
