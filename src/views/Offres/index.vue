<template>
  <div class="body-color">
    <nav-bar/>
    <div class="con-items ">
      <div class="item item1">
        <div class="con-img">
          <img src="1-3.png" alt="">
        </div>
        <header>
          <h3>Offre Simplicité</h3>
          <h4>Site internet vitrine en une seule page</h4>
          <p>
            <b>
              25€ HT/mois
            </b>
          </p>
        </header>
        <ul>
          <li>
            <i class='bx bx-check'></i>
            <b>Création de l’architecture technique du site</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Maintenance et entretien</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Hébergement de qualité en France</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Accompagnement Standard</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Fonctionnalités de base</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Fonctionnalités de base</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b> Assistant en ligne pour générer vos mentions légales</b>
          </li>
        </ul>
        <router-link :to="{name: 'Commandez'}">
          <button>
            Choisir ce plan
          </button>
        </router-link>
      </div>
      <div class="item color item2">
        <div class="con-img">
          <img src="2-1.png" alt="">
        </div>
        <span class="badge">
                Popular
            </span>
        <header>
          <h3>Offre Crédibilité</h3>
          <h4>Site internet professionnel multi-pages</h4>
          <p>
            <b>
              50€ HT/mois
            </b>
          </p>
        </header>
        <ul>
          <li>
            <i class='bx bx-check'></i>
            <b>Tout le pack Simplicité</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Système d'avis en ligne avec modération</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Création des pages et intégration des contenus initiaux (10 pages incluses)</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Optimisation du référencement sur le nom de votre entreprise</b>
          </li>
        </ul>
        <router-link :to="{name: 'Commandez'}">
          <button class="border">
            Choisir ce plan
          </button>
        </router-link>
      </div>
      <div class="item item3">
        <div class="con-img">
          <img src="3-1.png" alt="">
        </div>
        <header>
          <h3>Offre Performance</h3>
          <h4>Site internet professionnel optimisé pour le référencement</h4>
          <p>
            <b>
              90€ HT/mois
            </b>
          </p>
        </header>
        <ul>
          <li>
            <i class='bx bx-check'></i>
            <b>out le Pack Crédibilité</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Optimisation du référencement local sur 1 adresse</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Création et gestion d'une fiche Google My Business</b>
          </li>
          <li>
            <i class='bx bx-check'></i>
            <b>Ligne de téléphone fixe avec suivi d'appel</b>
          </li>
        </ul>
        <router-link :to="{name: 'Commandez'}">
          <button>
            Choisir ce plan
          </button>
        </router-link>
      </div>
    </div>
    <pieds-page/>
  </div>
</template>

<script>


import NavBar from "@/components/NavBars/NavBar";
import PiedsPage from "@/components/Footers/PiedsPage";

export default {
  name: "Index",
  components: {PiedsPage, NavBar},
}
</script>

<style scoped>
.body-color {
  min-height: 100%;
  top: 0;
  --primary: 25, 91, 255;
  --color: 44, 62, 80;
  --bg: 255, 255, 255;
  --red: 255, 0, 78;
  color: rgb(var(--color));
  background-image: linear-gradient(to left bottom, #7e80cb, #5e8cd2, #3b95d1, #139ecb, #00a4c1,
  #00adc1, #00b6be, #00bfb9, #00cfc2, #00dfc9, #00efce, #00ffd2);
}

* {
  list-style: none;
  outline: none;
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

b {
  padding: 0px 4px;
  display: inline-block;
}

.con-items {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.item {
  width: 360px;
  background: #fff;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, .05);
  border-radius: 40px;
  margin: 0px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all .25s ease;
  position: relative;
  height: 550px;
}

.item:not(.color):hover {
  transform: scale(1.05);
}

.item:hover .con-img {
  transform: scale(1.15);
}

.item.color:hover {
  transform: scale(1.15);
}

.con-img {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .25s ease;
}

.con-img img {
  width: 130px;
}

.item1 {
  padding-right: 45px;
}

.item2 {
  z-index: 100;
}

.item3 {
  padding-left: 45px;
}

.item.color {
  background: #3dcbab;
  color: #fff;
  transform: scale(1.1);
}

.item.color li {
  color: rgba(255, 255, 255, .75);
}

.item.color li b {
  color: rgba(255, 255, 255, 1);
}

.item.color li i {
  color: rgba(255, 255, 255, 1);
}

.item header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.item header h3 {
  font-size: 2rem;
}

.item header p {
  font-size: 1.2rem;
}

.badge {
  position: absolute;
  top: 5px;
  right: 20px;
  background: #fff;
  padding: 5px 10px;
  border-radius: 12px;
  color: rgb(61, 203, 171);
  font-weight: bold;
  font-size: .85rem;
}

.item ul {
  padding: 20px 0px;
  flex: 1;
  width: 100%;
}

.item ul li {
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  color: rgb(var(--color), .5)
}

.item ul li b {
  color: rgb(var(--color), 1)
}

.item ul li i {
  font-size: 1.6rem;
  margin-right: 15px;
  color: rgb(var(--color), 1)
}

.item button {
  padding: 14px 20px;
  width: 100%;
  background: rgb(61, 203, 171);
  border: 3px solid transparent;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0px 10px 25px 0px rgba(61, 203, 171, .35);
  cursor: pointer;
  transition: all .25s ease;
}

.item button:not(.border):hover {
  transform: translate(0, 5px);
  box-shadow: 0px 0px 0px 0px rgba(61, 203, 171, .35);
}

.item button.border {
  border: 3px solid #fff;
}

.item button.border:hover {
  background: #fff;
  color: rgb(61, 203, 171);
}
</style>
