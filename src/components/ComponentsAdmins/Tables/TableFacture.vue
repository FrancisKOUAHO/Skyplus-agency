<template>
  <table class="min-w-full bg-white">
    <thead class="bg-gray-800 text-white">
    <tr>
      <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nom</th>
      <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
      <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Projet</th>
      <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
    </tr>
    </thead>
    <tbody class="text-gray-700">
    <tr class="bg-gray-200">
      <td class="w-1/3 text-left py-3 px-4">et_client.name</td>
      <td class="text-left py-3 px-4"><a class="color-text" href="tel:622322662">et_client.name</a>
      </td>
      <td class="text-left py-3 px-4"><a class="color-text">et_client.name</a></td>
      <td class="text-left py-3 px-4"><a class="color-text">et_client.name</a></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableFacture"
}
</script>

<style scoped>

</style>
