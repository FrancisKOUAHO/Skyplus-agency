<template>
  <footer class='w-3/4 border-grey p-4' id="footer">
    <div>
      <p>SKYPLUS © 2021 - Agence de communication et de création digitale</p>
      <ul>
        <li class="no-link active"><span class="lang">FR</span></li>
        <li><a class="lang" href="http://www.agencekali.com/">EN</a></li>
        <li><a class="double" href="/page/infos-legales">infos <br>légales</a></li>
        <li class="no-link"><span class="double">© 2021 <br>agence kali</span></li>
      </ul>
    </div>

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



p {
  color: #fff;
}

</style>
