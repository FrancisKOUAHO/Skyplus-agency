<template>


  <figure class="wm-ripple__figure">
    <svg width="1440" height="300" viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M255 188C255 103.5 186.5 35 102 35C17.5004 35 -51 103.5 -51 188" stroke="url(#paint4_linear)" stroke-width="70" stroke-linecap="round" />
      <path d="M563 188C563 103.5 494.5 35 410 35C325.5 35 257 103.5 257 188" stroke="url(#paint0_linear)" stroke-width="70" stroke-linecap="round" />
      <path d="M869 188C869 103.5 800.5 35 716 35C631.5 35 563 103.5 563 188" stroke="url(#paint1_linear)" stroke-width="70" stroke-linecap="round" />
      <path d="M1175 188C1175 103.5 1106.5 35 1022 35C937.5 35 869 103.5 869 188" stroke="url(#paint2_linear)" stroke-width="70" stroke-linecap="round" />
      <path d="M1481 188C1481 103.5 1412.5 35 1328 35C1243.5 35 1175 103.5 1175 188" stroke="url(#paint3_linear)" stroke-width="70" stroke-linecap="round" />

      <circle cx="1174.89" cy="191" r="38" fill="white" />
      <circle cx="562.965" cy="191" r="38" fill="white" />
      <circle cx="868.93" cy="191" r="38" fill="white" />
      <circle cx="257" cy="191" r="38" fill="white" />

      <defs>
        <linearGradient id="paint0_linear" x1="187" y1="188" x2="644" y2="94" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC0BD" />
          <stop offset="1" stop-color="#FFC0BD" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="563" y1="-2.99999" x2="869" y2="200" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFB535" />
          <stop offset="1" stop-color="#FFB535" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="799" y1="188" x2="1256" y2="94" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC0BD" />
          <stop offset="1" stop-color="#FFC0BD" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear" x1="1082" y1="201" x2="1446" y2="95" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFB535" />
          <stop offset="1" stop-color="#FFB535" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear" x1="395" y1="-45" x2="83" y2="133" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFB535" />
          <stop offset="1" stop-color="#FFB535" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </figure>
</template>

<script>
export default {
  name: "Points"
}
</script>

<style scoped>
@font-face {
  font-family: "Bandein strange";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/200360/BandeinsStrangeVariableGX.ttf");
}
/* Template */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
}

body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background: #1245bf;
}

svg {
  position: relative;
  width: 100%;
}
svg path {
  stroke-dasharray: 480;
  stroke-dashoffset: 480;
}
svg path:nth-child(1) {
  animation: dash 2s 0.4s linear infinite;
}
svg path:nth-child(2) {
  animation: dash 2s 0.8s linear infinite;
}
svg path:nth-child(3) {
  animation: dash 2s 1.2s linear infinite;
}
svg path:nth-child(4) {
  animation: dash 2s 1.6s linear infinite;
}
svg path:nth-child(5) {
  animation: dash 2s 2s linear infinite;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 480;
  }
  25% {
    stroke-dashoffset: 960;
  }
  50% {
    stroke-dashoffset: 1440;
  }
  100% {
    stroke-dashoffset: 1440;
  }
}

</style>
