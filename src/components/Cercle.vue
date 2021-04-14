<template>
  <div class="cercle-sun">
  </div>
</template>

<script>
export default {
  name: "Cercle",
}
</script>

<style scoped>
.cercle-sun {
  /* Create the circle */
  width: 200px;
  height: 200px;
  border: 14px solid white;
  border-radius: 50%;
  /* Halve the circle */
  border-bottom-color: transparent;
  border-left-color: transparent;
  /* Rotate the circle */
  transform: rotate(-93deg);
  margin-left: 89%;
  margin-top: 315px;
}

</style>
