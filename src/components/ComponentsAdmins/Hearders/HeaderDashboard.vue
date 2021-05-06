<template>
  <nav class="text-white text-base font-semibold pt-3">
    <router-link :to="{name: 'Dashboard'}" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
      <i class="fas fa-tachometer-alt mr-3"></i>
      Tableau de bord
    </router-link>
    <router-link :to="{name: 'Client'}" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
      <i class="fas fa-sticky-note mr-3"></i>
      Client
    </router-link>
    <router-link :to="{name: 'Facturation'}" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
      <i class="fas fa-sticky-note mr-3"></i>
      Facturation
    </router-link>
    <router-link :to="{name: 'Projet'}" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
      <i class="fas fa-table mr-3"></i>
      Projet
    </router-link>
    <router-link :to="{name: 'Calendrier'}" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
      <i class="fas fa-calendar mr-3"></i>
      Calendrier
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderDashboard"
}
</script>

<style scoped>

</style>
