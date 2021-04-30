<template>
<div class="container_bloc1">
  <h3>Libre comme une pétale de cerisier dans l’air</h3>
  <h5>Nous sommes ouvert à la <span class="h5bold">créativité</span> de chacuns</h5>
</div>
</template>


<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'CreationBlocTop',
  data() {
    return {}
  }
})
</script>

<style scoped>

.container_bloc1{
    background: #fffefe60;
    padding: 17em 3em 2em 3em;
    width: 30%;
    position: absolute;
    top: 0;
    left: 30em;
}

h3{
    font-size: 2rem;
}

h5{
    font-size: 1.5rem;
    text-align: right;
    margin-top: 1.5em;
    padding-left: 4.5em;
}

h3, h5, .h5bold{
    color: #fffefe;
} 

h3, .h5bold{
    font-family: Raleway-Bold;
}
</style>