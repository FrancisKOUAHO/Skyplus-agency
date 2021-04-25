<template>
  <div id="hello">
    <span style="margin-top: 20%">Say hello</span>
  </div>
  <div>
    <img src="../assets/image/right-arrow.svg" alt="" width="25" style="margin-left: 96.6%; margin-top: -6.5%; color: white; transform: rotate(-90deg);">
  </div>
</template>

<script>
export default {
  name: "Hello"
}
</script>

<style scoped>
#hello {
  position: fixed;
  z-index: 120;
  right: 39px;
  top: 30%;
  -webkit-transform: translateY(-50%) rotate(-90deg);
  transform: translateY(-50%) rotate(-90deg);
  cursor: pointer;
  margin-right: -2.5rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}


#hello span {
  color: #fff;
  font-size: .6rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .2rem;
  line-height: .8rem;
}

#hello {
  cursor: pointer;
}

#hello span::after {
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 1px;
  background: #fff;
  top: 50%;
  margin-top: -1px;
  left: 1rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

#hello span {
  color: #fff;
  font-size: .6rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .2rem;
  line-height: .8rem;
}
</style>
