<template>
  <hr class="hr-vertical">
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'LineVertical',
  data() {
    return {}
  }
})
</script>


<style scoped>
.hr-vertical {
  border: 0;
  border-left: 3px solid white;
  height: 220px;
  margin-left: 35%;
  margin-top: -9%;
}
</style>
