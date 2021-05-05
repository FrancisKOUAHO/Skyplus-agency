<template>
  <div>
    <h3>Line Chart Example in Vue</h3>
    <line-chart></line-chart>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import LineChart from "@/components/Chart/LineChart";

export default defineComponent({
  name: "Visualisation",
  components: {LineChart},
})
</script>

<style scoped>
</style>
