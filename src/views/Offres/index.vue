<template>
<div class="flex flex-row justify-center">
<div class="snip1265">
  <div class="plan">
    <header><i class="ion-ios-navigate-outline"></i>
      <h4 class="plan-title">
        Pack Bronze
      </h4>
      <div class="plan-cost"><span class="plan-price">130€ + 25€</span><span class="plan-type">/mois</span></div>
    </header>
    <ul class="plan-features">
      <li>Site vitrine en une seule page
      </li>
      <li>Création de l'architecture technique
      </li>
      <li>Expérience utilisateur optimisée
      </li>
      <li>Création des pages et intégrations
      </li>
      <li>Maintenance et entretien
      </li>
      <li>Nom de domaine + hébergement
      </li>
      <li>Fonctionnalités de base
      </li>
      <li>Rapport de trafic
      </li>
      <li>Sauvegarde quotidienne du site
      </li>
    </ul>
    <div class="plan-select"><a href="">Sélectionner</a></div>
  </div>
 
  <div class="plan featured">
    <header><i class="ion-ios-people"></i>
      <h4 class="plan-title">
        Pack Gold
      </h4>
      <div class="plan-cost"><span class="plan-price">250€ + 50€</span><span class="plan-type">/mois</span></div>
    </header>
    <ul class="plan-features">
      <li>Site Web professionnel multi-pages
      </li>
      <li>Tout le pack BRONZE
      </li>
      <li>Système d'avis en ligne
      </li>
      <li>Optimisation du référencement sur le nom de l'entreprise
      </li>
    </ul>
    <div class="plan-select"><a href="">Sélectionner</a></div>
  </div>
  <div class="plan">
    <header><i class="ion-ios-speedometer"></i>
      <h4 class="plan-title">
        Pack Platinium
      </h4>
      <div class="plan-cost"><span class="plan-price">350€ + 90€</span><span class="plan-type">/mois</span></div>
    </header>
    <ul class="plan-features">
      <li>Site Web professionnel optimisé pour le référencement
      </li>
      <li>Tout le pack GOLD
      </li>
      <li>Optimisation du référencement local sur 1 adresse
      </li>
      <li>Création et gestion d'une fiche Google Mybusiness
      </li>

    </ul>
    <div class="plan-select"><a href="">Sélectionner</a></div>
  </div>
</div>
</div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import axios from '../../utils/axiosInstance';
import {useStripe} from 'vue-use-stripe';

export default defineComponent({
  name: 'Index',
  components: {},
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color1')
    const isPurchasing = ref(false);
    const {stripe} = useStripe({
      key:
          'pk_live_51IoOLwEQZ5CWt7xoCMXJ2guOk2tfgq0WPrDa619s30mNlAghqQ3lD9AM7qrXoslqTm5wu2TwKqGLPdJnqgmakAJi00hgUA6dM8',
    });
    const purchaseMonthlyPlan = async (priceId) => {
      isPurchasing.value = true;
      try {
        const {data} = await axios.post('/payments/create-checkout-session', {
          priceId,
        });
        const handleResult = await stripe.value.redirectToCheckout({
          sessionId: data.sessionId,
        });
        console.log(handleResult);
      } catch (error) {
        console.log(error.message);
      }
      isPurchasing.value = false;
    };
    return {
      purchaseMonthlyPlan,
      isPurchasing,
    };
  },
});
</script>
<style scoped>
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);
@import url(https://fonts.googleapis.com/css?family=Montserrat:800);

.snip1265 {
  font-family: 'Raleway', Arial, sans-serif;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.snip1265 .plan {
  margin: 0;
  width: 50%;
  position: relative;
  float: left;
  background-color: #262626;
  border: 1px solid #1e1e1e;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  height: 32em;
}
.snip1265 .plan:hover,
.snip1265 .plan.hover {
  background-color: #1c1c1c;
}
.snip1265 .plan:hover i,
.snip1265 .plan.hover i {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.snip1265 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}
.snip1265 header {
  position: relative;
  padding: 20px 10px;
}
.snip1265 header i {
  font-size: 56px;
  margin: 0 15px;
  color: #f39c12;
  display: inline-block;
  float: left;
}
.snip1265 .plan-title {
  top: 0;
  font-weight: 800;
  margin: 10px 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.snip1265 .plan-cost {
  margin: 0;
  opacity: 0.2;
}
.snip1265 .plan-price {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 800;
  font-size: 1.3em;
}
.snip1265 .plan-type {
  opacity: 0.8;
  font-size: 0.7em;
  text-transform: uppercase;
}
.snip1265 .plan-features {
  padding: 0;
  margin: 0 0 40px;
  text-align: center;
  list-style: outside none none;
  font-size: 0.8em;
  text-align: left;
}
.snip1265 .plan-features li {
  padding: 5px 5%;
  font-weight: 500;
  opacity: 0.5;
  border-left: 5px solid #f39c12;
  margin: 2px 20px;
}
.snip1265 .plan-select {
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  position:absolute;
  bottom: 0;
  width: 100%;
}
.snip1265 .plan-select a {
  color: #ffffff;
  text-decoration: none;
  padding: 15px 20px;
  margin: 20px;
  border-radius: 40px;
  font-size: 0.75em;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  background-color: #f39c12;
}
.snip1265 .plan-select a:hover {
  background-color: #262626;
}
.snip1265 .featured {
  margin-top: -10px;
  background-color: #262626;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.snip1265 .featured .plan-select a {
  margin: 30px 20px;
}
@media only screen and (max-width: 767px) {
  .snip1265 .plan {
    width: 50%;
  }
  .snip1265 .plan-title,
  .snip1265 .plan-select a {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .snip1265 .plan-select a,
  .snip1265 .featured .plan-select a {
    margin: 20px;
  }
  .snip1265 .featured {
    margin-top: 0;
  }
}
@media only screen and (max-width: 440px) {
  .snip1265 .plan {
    width: 100%;
  }
}


</style>
