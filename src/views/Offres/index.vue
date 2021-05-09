<template>
  <nav-bar/>
  <div class="background">
    <div class="container">
      <div class="panel pricing-table">

        <div class="pricing-plan">
          <img src="../../assets/image/forfaits/bronze.png" alt="" class="pricing-img">
          <h2 class="pricing-header">Bronze Package</h2>
          <br>
          <h4 class="pricing-header">Site internet vitrine en une seule page</h4>
          <ul class="pricing-features">
            <li class="pricing-features-item">Création de l’architecture technique du site</li>
            <li class="pricing-features-item">Maintenance et entretien</li>
            <li class="pricing-features-item">Hébergement de qualité en France</li>
            <li class="pricing-features-item">Accompagnement Standard</li>
            <li class="pricing-features-item">Fonctionnalités de base</li>
            <li class="pricing-features-item">Rapport de trafic</li>
            <li class="pricing-features-item">Assistant en ligne pour générer vos mentions légales</li>
          </ul>
          <span class="pricing-price">130€ + 25€/mois</span>
          <router-link to="#"
                       class="pricingTable-firstTable_table__getstart pricing-button"
                       :disabled="isPurchasing"
                       @click="purchaseMonthlyPlan('price_1IobEQKYGE5dRt9iRJCRKPj9')"
          >
            <img
                class="loader"
                v-if="isPurchasing"
                src="../../assets/image/loading.gif"
            />
            <span v-else style="color: #269aff;">Commencez maintenant</span>
          </router-link>
        </div>

        <div class="pricing-plan">
          <img src="../../assets/image/forfaits/gold.png" alt="" class="pricing-img">
          <h2 class="pricing-header">Gold Package</h2>
          <br>
          <h4 class="pricing-header">Site internet professionnel multi-pages</h4>
          <ul class="pricing-features">
            <li class="pricing-features-item">Tout le pack Simplicité</li>
            <li class="pricing-features-item">Système d'avis en ligne avec modération</li>
            <li class="pricing-features-item">Création des pages et intégration des contenus initiaux (10 pages incluses)</li>
            <li class="pricing-features-item">Optimisation du référencement sur le nom de votre entreprise</li>
          </ul>
          <span class="pricing-price" style="margin-top: 75%;">250€ + 50€/mois</span>
          <router-link to="#"
                       style="margin-top: 13%;"
                       class="pricingTable-firstTable_table__getstart pricing-button is-featured"
                       :disabled="isPurchasing"
                       @click="purchaseMonthlyPlan('price_1IobF1KYGE5dRt9ixPLWJisT')"
          >
            <img
                class="loader"
                v-if="isPurchasing"
                src="../../assets/image/loading.gif"
            />
            <span v-else>Commencez maintenant</span>
          </router-link>
        </div>

        <div class="pricing-plan">
          <img src="../../assets/image/forfaits/platinium.png" alt="" class="pricing-img">
          <h2 class="pricing-header">Platinum Package</h2>
          <br>
          <h4 class="pricing-header">Site internet professionnel optimisé pour le référencement</h4>
          <ul class="pricing-features">
            <li class="pricing-features-item">Tout le Pack Crédibilité</li>
            <li class="pricing-features-item">Optimisation du référencement local sur 1 adresse</li>
            <li class="pricing-features-item">Création et gestion d'une fiche Google My Business</li>
            <li class="pricing-features-item">Ligne de téléphone fixe avec suivi d'appel</li>
          </ul>
          <span class="pricing-price" style="margin-top: 93%;">350€ + 90€/mois</span>
          <router-link to="#"
                       style="margin-top: 12%;"
                       class="pricingTable-firstTable_table__getstart pricing-button "
                       :disabled="isPurchasing"
                       @click="purchaseMonthlyPlan('price_1IobFYKYGE5dRt9iMWB6SSkN')"
          >
            <img
                class="loader"
                v-if="isPurchasing"
                src="../../assets/image/loading.gif"
            />
            <span v-else style="color: #269aff;">Commencez maintenant</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <pieds-page class="pieds-page"/>
</template>

<script>
import NavBar from '@/components/NavBars/NavBar';
import PiedsPage from '@/components/Footers/PiedsPage';
import {defineComponent, ref} from 'vue';
import axios from '../../utils/axiosInstance';
import {useStripe} from 'vue-use-stripe';

export default defineComponent({
  name: 'Index',
  components: {PiedsPage, NavBar},
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color1')
    const isPurchasing = ref(false);
    const {stripe} = useStripe({
      key:
          'pk_test_51HwcPhKYGE5dRt9idxqGRsQgRwPQ78zHXD9N6cfWcC77owBiEJFH7r7d4sI0nfLnLj9U9gRMTr1bzQbSLgnasBMa00MHGpiTx5',
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
.pieds-page {
  margin-bottom: -25%;
}

html {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}


@media (min-width: 900px) {
  .background {
    padding: 0 0 25px;
  }
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 960px;
  width: 100%;
}

.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
}

.pricing-header {
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  color: #016FF9;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #016FF9 !important;
  display: block;
  font-size: 23px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #48aaff;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #269aff;
}
</style>
