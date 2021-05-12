<template>
  <footer class="site-footer">
    <h1>SKYPLUS © 2021 - Agence de communication et de création digitale</h1>
    <div>
      <ul>
        <router-link class="double" :to="{name: 'InfosLegales'}">
          <li> infos <br>légales</li>
        </router-link>
        <li>
          <router-link :to="{name: 'Login'}">
            <span>© 2021 <br>SKYPLUS</span>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PiedsPage',
  data() {
    return {}
  }
})
</script>

<style scoped>
footer {
  font-family: Raleway-Regular, sans-serif;
  background-image: linear-gradient(to right, rgb(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  position: absolute;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
}
footer, div, ul{
  display: flex;
  justify-content: space-between;
  padding-left: 2em;
}

.site-footer
{
  left: 0;
  width: 100%;
  background: hsla(0,0%,100%,.08);
  z-index: 14;
}

ul{
  margin-right: 5em;
}

span, li{
  font-family: Raleway-Bold, serif;
  padding: 0 1rem;
  line-height: 1rem;
  display: block;
  font-weight: 450;
  color: #fff;
  font-size: 0.8rem;
}

h1{
  font-family: Raleway-Bold, serif;
  color: white;
  font-size: 0.8rem;
  margin-left: 2em;
}

</style>
