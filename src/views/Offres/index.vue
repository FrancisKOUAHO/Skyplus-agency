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

.snip1265 {
  font-family: 'Raleway', Arial, sans-serif;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.snip1265 .plan {
  margin: 0;
  width: 50%;
  position: relative;
  float: left;
  background-color: #fffefe;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: 34em;
}
.snip1265 .plan:hover,
.snip1265 .plan.hover {
  transform: translateY(-1em);
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
  color: #7e80cb;
  display: inline-block;
  float: left;
}
.snip1265 .plan-title {
  top: 0;
  margin: 10px 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000;
  font-family: Raleway-Bold;
}
.snip1265 .plan-cost {
  margin: 0;
}
.snip1265 .plan-price {
  font-family: Raleway-Regular;
  font-weight: 600;
  font-size: 1.3em;
  color: #7e80cb
}
.snip1265 .plan-type {
  opacity: 0.8;
  font-size: 0.7em;
  text-transform: uppercase;
  color: #7e80cb;
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
  opacity: 0.8;
  border-left: 5px solid #7e80cb;
  margin: 2px 20px;
  color: #000;
  font-family: Raleway-Regular;
  font-size: 0.9rem;
}
.snip1265 .plan-select {
  background: linear-gradient(to right, #86A8E7, #7e80cb);
  text-align: center;
  position:absolute;
  bottom: 0;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.snip1265 .plan-select a {
  color: #fffefe;
  text-decoration: none;
  padding: 15px 20px;
  margin: 20px;
  border-radius: 40px;
  font-size: 0.75em;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  border: 2px solid #fffefe;
}
.snip1265 .plan-select a:hover {
  background-color: #fffefe;
  color: #000;
}
.snip1265 .featured {
  margin-top: -10px;
  background-color: #fffefe;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.snip1265 .featured .plan-select a {
  margin: 30px 20px;
}
@media only screen and (max-width: 768px) {
  .snip1265 {
    width: 70%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

  .snip1265 .plan {
    width: 100%;
    margin-top: 2em;
  }

  .snip1265 .plan-features li{
    font-size: 1rem;
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
}
@media only screen and (max-width: 440px) {
  .snip1265 {
    width: 90%;
  }
  .snip1265 .plan {
    width: 100%;
    height: 36em;
  }
}


</style>
