<template>
  <div class="body-color">
    <div style="margin-top: -45%; z-index: 10">
      <router-link :to="{name: 'Accueil'}">
        <svg width="100" height="100" viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="40" y1="45" x2="198" y2="45" stroke="white" stroke-width="10"/>
          <line x1="45" y1="198" x2="45" y2="40" stroke="white" stroke-width="10"/>
          <line x1="193" y1="198" x2="193" y2="148" stroke="white" stroke-width="10"/>
          <line x1="193" y1="90" x2="193" y2="40" stroke="white" stroke-width="10"/>
          <line x1="193" y1="139" x2="193" y2="99" stroke="white" stroke-width="10"/>
          <line x1="173" y1="119" x2="213" y2="119" stroke="white" stroke-width="10"/>
          <line x1="40" y1="193" x2="198" y2="193" stroke="white" stroke-width="10"/>
          <path d="M118.397 144.458L84 128.025V147.334L118.397 165V144.458Z" fill="#FFFEFE"/>
          <path d="M153 110.975V90.6388L118.397 74V93.5147L153 110.975Z" fill="#FFFEFE"/>
          <path
              d="M118.397 74L153 90.6388V110.975L118.397 93.5147M118.397 74L84 92.0767M118.397 74V93.5147M84 92.0767V110.975L134.051 136.652M84 92.0767L102.743 101.731M134.051 136.652L118.397 144.458M134.051 136.652L153 147.334M118.397 144.458L84 128.025V147.334L118.397 165M118.397 144.458V165M118.397 165L153 147.334M153 147.334V126.381L102.743 101.731M102.743 101.731L118.397 93.5147"
              stroke="white" stroke-width="5"/>
        </svg>
      </router-link>
    </div>
    <div class="container" style="display: flex; flex-direction: column;">
      <center>
        <div>
          <center><h1 class="text-white text-6xl">Les offres Skyplus </h1></center>
        </div>
      </center>
      <div class="placement-bottom" style="color: white">
        <p class="text-xl" style="font-family:Montserrat;text-transform: uppercase">3 offres pour les indépendants</p>
      </div>
    </div>
    <div class="container">
      <div class="container__card">
        <div class="container__card--content">
          <h2>01</h2>
          <h3>Offre Simplicité</h3>
          <div class="placement-bottom">
            <p>
              Site internet vitrine
              en une seule page
            </p>
          </div>
          <div class="placement-bottom">
            <p>25€ HT/mois</p>
          </div>
          <div class="placement-bottom">
            <ul>
              <li>Création de l’architecture technique du site</li>
              <li>Maintenance et entretien</li>
              <li>Hébergement de qualité en France</li>
              <li>Accompagnement Standard</li>
              <li>Fonctionnalités de base</li>
              <li>Rapport de trafic</li>
              <li>Assistant en ligne pour générer vos mentions légales</li>
            </ul>
          </div>
          <div style="margin-top: 10%">
            <router-link :to="{name: 'OffresIndependants'}">
              Ça m'intéresse !
            </router-link>
          </div>
        </div>
      </div>
      <div class="container__card">
        <div class="container__card--content">
          <h2>02</h2>
          <h3>Offre Performance</h3>
          <div class="placement-bottom">
            <p>
              Site internet professionnel
              optimisé pour le référencement
            </p>
          </div>
          <div class="placement-bottom">
            <p>
              90€ HT/mois
            </p>
          </div>
          <div class="placement-bottom">
            <ul>
              <li>Tout le Pack Crédibilité</li>
              <li>Optimisation du référencement local sur 1 adresse</li>
              <li>Création et gestion d'une fiche Google My Business</li>
              <li>Ligne de téléphone fixe avec suivi d'appel</li>
            </ul>
          </div>
          <div>
            <router-link :to="{name: 'OffresEntreprises'}">
              Ça m'intéresse !
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OffresIndependants"
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.body-color {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #161623;
}

li{
  list-style-type: space-counter;
}

.body-color::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#f00, #f0f);
  clip-path: circle(20% at right 90%);
}

.placement-bottom {
  margin-top: 5%;
  color: white;
}

.body-color::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#2196f3, #e91e63);
  clip-path: circle(20% at 10% 10%);
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  z-index: 1;
}

.container__card {
  position: relative;
  width: 299px;
  height: 491px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin-left: -2%;
}

.container__card--content {
  padding: 20px;
  text-align: center;
  transition: 0.5s;
}

.container__card--content h2 {
  position: absolute;
  top: -40px;
  right: 30px;
  font-size: 8em;
  color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
}

.container__card--content h3 {
  font-size: 1.8em;
  color: #fff;
  z-index: 1;
}

.container__card--content p {
  font-size: 1em;
  color: #fff;
  font-weight: 300;
}

.container__card--content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: #fff;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

</style>
