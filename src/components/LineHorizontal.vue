<template>
  <div class="hr-flex">
    <div class="hr-horizontal">
      <hr>
    </div>
    <div class="hr-flex-z">
      Sky’s not the limit
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'LineHorizontal',
  data() {
    return {}
  }
})
</script>

<style scoped>
.hr-flex{
  display: flex;
}

.hr-flex-z{
  margin-left: 0.2%;
  color: white;
  margin-top: 4%;
  font-size: 21px;
}

.hr-horizontal{
  width: 28%;
  margin-top: 5%;
}


</style>
