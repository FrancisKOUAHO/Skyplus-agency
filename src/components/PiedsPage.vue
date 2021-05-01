<template>
  <footer class='w-3/4 border-grey p-4' id="footer">
    <h1 style="color: white; font-size: 0.9rem">SKYPLUS © 2021 - Agence de communication et de création digitale</h1>
    <ul>
      <li class="no-link active"><span class="lang">FR</span></li>
      <li><a class="lang" href="http://www.skyplus.com/">EN</a></li>
      <router-link class="double" :to="{name: 'InfosLegales'}">
        <li> infos <br>légales</li>
      </router-link>

      <li class="no-link">
        <router-link :to="{name: 'Login'}">
          <span class="double">© 2021 <br>SKYPLUS</span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import Cercle from "@/components/Cercle.vue";

export default defineComponent({
  name: 'PiedsPage',
  data() {
    return {}
  }
})
</script>

<style scoped>
footer {
  background-image: linear-gradient(to right, rgb(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  position: absolute;
  bottom: 0;
  text-align: left;
  padding-left: 2em;
}

#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  z-index: 14;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

#footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-right: 0px;
  padding-right: 2rem;
}

#footer ul {
  list-style-type: none;
  text-align: right;
}

#footer ul li {
  text-align: left;
  position: relative;
}

#footer ul li {
  display: inline-block;
  vertical-align: middle;
}

p {
  color: #fff;
}

#footer ul li.active::before, #footer ul li.active::after {
  width: 50%;
  opacity: 1;
  display: block;
}

#footer ul li.no-link::before, #footer ul li.no-link::after {
  display: none;
}

#footer ul li::before {
  right: 50%;
}

#footer ul li::before, #footer ul li::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  width: 0;
  height: 1px;
  background: #fff;
  opacity: .5;
  -webkit-transition: width .25s ease;
  transition: width .25s ease;
}

#footer ul li.active a, #footer ul li.active span {
  font-weight: 600;
}

#footer ul li a.lang, #footer ul li span.lang {
  letter-spacing: 1px;
}

#footer ul li a, #footer ul li span {
  padding: 0 1rem;
  line-height: 3rem;
  display: block;
  font-weight: 450;
  color: #fff;
  font-size: .5rem;
}

#footer ul li.active::before, #footer ul li.active::after {
  width: 50%;
  opacity: 1;
  display: block;
}

#footer ul li.no-link::before, #footer ul li.no-link::after {
  display: none;
}

#footer ul li::after {
  left: 50%;
}

#footer ul li {
  text-align: left;
  position: relative;
}

#footer ul li::before, #footer ul li::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  width: 0;
  height: 1px;
  background: #fff;
  opacity: .5;
  -webkit-transition: width .25s ease;
  transition: width .25s ease;
}

#footer ul li a.lang, #footer ul li span.lang {
  letter-spacing: 3px;
}

#footer ul li a, #footer ul li span {
  padding: 0 1rem;
  line-height: 3rem;
  display: block;
  font-weight: 450;
  color: #fff;
  font-size: .5rem;
}

a, a:hover, a:focus, a:active {
  color: inherit;
  text-decoration: none;
}

a {
  background-color: transparent;
}

#footer ul li a[data-v-52281f4a], #footer ul li span[data-v-52281f4a] {
  padding: 0 1rem;
  line-height: 1rem;
  display: block;
  font-weight: 450;
  color: #fff;
  font-size: 0.7rem;
}

</style>
