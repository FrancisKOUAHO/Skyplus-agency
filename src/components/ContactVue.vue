<template>
  <section id='section5' class="pt-5 pb-5 structure">
    <!-- Titre de la section -->
    <h1 class="titleSection pb-3 pb-md-5 " style="color: white">Nous gravitons dans</h1>
    <h1 class="titleSection pb-3 pb-md-5" style="color: white">les meilleures sphères</h1>
    <!-- Fin du titre de la section -->
    <div class="container">

      <!-- OMBRES -->
      <div class="drop drop-1"></div>
      <div class="drop drop-2"></div>
      <div class="drop drop-4"></div>
      <div class="drop drop-5"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactVue"
}
</script>

<style scoped>

:root{
  --white: #ffffff;
  --twhite: rgb(255, 255, 255,.3);
  --dark-green :#435247;
  --light-green : #8eaa97;
}
*{
  margin: 0;
  padding: 0;
}
.titleSection{
  font-size: 2em;
}
h1{
  font-family: 'Parisienne',Verdana, Helvetica, serif;
  text-align: center;
}
/******************        SECTION 5  ( CONTACT )   *******************/

#section5{
  background: linear-gradient(45deg, var(--light-green), var(--dark-green));
  color: var(--white);
}
#section5 .container{
  position: relative;
  width: 80%;
  margin: 0 auto;
  z-index: 1;
}
#formulaire{
  border-radius: 1em;
  background-color: var(--twhite);
  border-left: 1px solid var(--twhite);
  border-top: 1px solid var(--twhite);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, .2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
}
#message{
  /* Le resize none permet d'enlever le curseur qui agrandit l'espace de texte*/
  resize: none;
}
#section5 label, button{
  font-family: 'Philisopher', Verdana, Helvetica, sans-serif;
  opacity: .8;
  font-size: 1.1em;
}
#section5 input, #message{
  background: transparent;
  border: none;
  border-left: 1px solid var(--twhite);
  border-top: 1px solid var(--twhite);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, .2);
}
.bouton-valider {
  background: var(--dark-green);
  border-color: var(--light-green);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, .2);
  padding: 10px;
  border: none;
  transition: all 1s;
}
.bouton-valider:hover{
  background: #ff9966;
}
.drop{
  position: absolute;
  background: var(--twhite);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  border-left: 1px solid var(--twhite);
  border-top: 1px solid var(--twhite);
  border-radius: 10px;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, .2);
}
.drop-1{
  height: 90px;
  width: 90px;
  top:-20px;
  left: -30px;
  z-index: -1;
}
.drop-2{
  height: 120px;
  width: 120px;
  bottom:-20px;
  right: -40px;
  z-index:1;
}
.drop-3{
  height: 24em;
  width: 15em;
  bottom:30%;
  right: 20%;
  z-index:-1;
}

</style>
