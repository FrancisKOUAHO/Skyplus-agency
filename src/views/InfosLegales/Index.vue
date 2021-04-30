<template>
    <nav-bar/>
    <info-legal/>
    <hello/>
    <pieds-page/>
</template>

<script lang="ts">


import {defineComponent} from 'vue'
import NavBar from "@/components/NavBar.vue";
import PiedsPage from "@/components/PiedsPage.vue";
import Hello from "@/components/Hello.vue";
import InfoLegal from "@/components/InfoLegal.vue";

export default defineComponent({
  name: 'Accueil',
  components: {Hello, PiedsPage, NavBar, InfoLegal},
  data() {
    return {}
  },
  methods: {}
})
</script>

<style scoped>

</style>
