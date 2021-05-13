<template>
  <div class="containerOffre">
    <h1>Les offres Skyplus</h1>
    <p>Toutes nos offres sont sans engagement</p>
  </div>
  <div class="flex flex-row justify-center mt-10 listeOffre">
    <div class="snip1265">
      <div class="plan">
        <header>
          <i class="ion-ios-navigate-outline"></i>
          <h4 class="plan-title">
            Pack BASIC
          </h4>
          <div class="plan-cost"><span class="plan-price">130€ + <span style="color: #EA6232">25€</span></span><span class="plan-type">/mois</span></div>
        </header>
        <ul class="plan-features">
          <li class="listViolet">Site vitrine en une seule page
          </li>
          <li class="listViolet">Création de l'architecture technique
          </li>
          <li class="listViolet">Expérience utilisateur optimisée
          </li>
          <li class="listViolet">Création des pages et intégrations
          </li>
          <li class="listOrange">Maintenance, entretien et assistance
          </li>
          <li class="listOrange">Nom de domaine + hébergement
          </li>
          <li class="listOrange">Fonctionnalités de base
          </li>
          <li class="listOrange">Rapport de trafic
          </li>
          <li class="listOrange">Sauvegarde quotidienne du site
          </li>
        </ul>
        <div class="plan-select">
          <router-link to="#"
                       class="pricingTable-firstTable_table__getstart pricing-button"
                       @click="purchaseMonthlyPlan('price_1Iow3UEQZ5CWt7xoFjZuD9fq')"
          >
            <span>Sélectionner</span>
          </router-link>
          <a href="#modal-container" class="pricingTable-firstTable_table__getstart pricing-button" data-v-2f65754e="">
            <span>Contactez-nous</span>
          </a>
        </div>
      </div>

      <div class="plan featured">
        <header><i class="ion-ios-people"></i>
          <h4 class="plan-title">
            Pack PREMIUM
          </h4>
          <div class="plan-cost"><span class="plan-price">250€ + <span style="color: #EA6232">50€</span></span><span class="plan-type">/mois</span></div>
        </header>
        <ul class="plan-features">
          <li class="listViolet">Site Web professionnel multi-pages
          </li>
          <li class="listViolet">Tout le pack BASIC
          </li>
          <li class="listViolet">Système d'avis en ligne
          </li>
          <li class="listOrange">Optimisation du référencement sur le nom de l'entreprise
          </li>
        </ul>
        <div class="plan-select">
          <router-link to="#"
                       class="pricingTable-firstTable_table__getstart pricing-button is-featured"
                       @click="purchaseMonthlyPlan('price_1Iow4EEQZ5CWt7xo4Zy7X0jo')"
          >
            <span>Sélectionner</span>
          </router-link>
          <a href="#modal-container" class="pricingTable-firstTable_table__getstart pricing-button" data-v-2f65754e="">
            <span>Contactez-nous</span>
          </a>
        </div>
      </div>
      <div class="plan">
        <header><i class="ion-ios-speedometer"></i>
          <h4 class="plan-title">
            Pack BUSINESS
          </h4>
          <div class="plan-cost"><span class="plan-price">350€ + <span style="color: #EA6232">90€</span></span><span class="plan-type">/mois</span></div>
        </header>
        <ul class="plan-features">
          <li class="listViolet">Site Web professionnel optimisé pour le référencement
          </li>
          <li class="listViolet">Tout le pack PREMIUM
          </li>
          <li class="listOrange">Optimisation du référencement local sur 1 adresse
          </li>
          <li class="listOrange">Création et gestion d'une fiche Google Mybusiness
          </li>
        </ul>
        <div class="plan-select">
          <router-link to="#"
                       class="pricingTable-firstTable_table__getstart pricing-button "
                       @click="purchaseMonthlyPlan('price_1Iow4kEQZ5CWt7xoDTjesKsG')"
          >
            <span>Sélectionner</span>
          </router-link>
          <a href="#modal-container" class="pricingTable-firstTable_table__getstart pricing-button" data-v-2f65754e="">
            <span>Contactez-nous</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-container">
    <div class="modal">
      <form @submit.prevent="sendEmail" >
        <div class="form">
          <a class="btnClose" href="#">✖</a>
          <h2>Vous êtes intéressé ?<br>Contactez nous !</h2>
          <div class="inputTxt">
            <input type="text" required="" name="name"/><span class="bar"></span><span class="label">NOM Prénom</span>
          </div>
          <div class="inputTxt">
            <input type="email" required="" name="email"/><span class="bar"></span><span class="label">Email</span>
          </div>
          <div class="inputTxt">
            <input type="tel" required="" name="tel"/><span class="bar"></span><span class="label">Téléphone</span>
          </div>
          <div class="inputTxt">
            <label class="labelSelect">Quelle est l'offre concernée ?</label>
            <div class="formfield-select">
              <div class="formfield-select--container">
                <select name="selected">
                  <option value="bronze">Pack BASIC</option>
                  <option value="argent">Pack PREMIUM</option>
                  <option value="gold">Pack BUSINESS</option>
                </select>
              </div>
            </div>
          </div>

          <div class="inputTxt">
            <div class="textwrapper"><textarea cols="2" rows="4" id="rules" placeholder="Votre message" name="message"/></div>
          </div>

          <div class="button">
            <button type="submit" value="Send" @click="close">Envoyer</button>
          </div>
        </div>
      </form>
    </div>
  </div>


</template>

<script>
import {defineComponent, ref} from 'vue';
import axios from '../../utils/axiosInstance';
import {useStripe} from 'vue-use-stripe';
import emailjs from "emailjs-com";
import swal from "sweetalert";

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
  methods: {
    close() {
      let close = document.getElementById('modal-container').style.display = 'none';
    },
    sendEmail: (e) => {
      emailjs.sendForm('service_l8twccb', 'template_q8cvqtb', e.target, 'user_IIORNjcJYo0Dcw6YZHP4E')
          .then((result) => {
            if (emailjs) {
              setTimeout("close()", 900);
              swal("Success", "Email envoyé", "Error");
            }
          }, (error) => {
            swal("Error", "Email non envoyé", "Error");
          });
    },
  }
});
</script>

<style scoped>
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);

.listeOffre{
  margin-top: 5em;
}

.containerOffre {
  margin-top: 5em;
  padding: 1em;
  display:flex;
  flex-direction: column;
  text-align: center;
}

.containerOffre h1{
  color: #ffffff;
  font-size: 2.2rem;
  font-family: Raleway-Bold;
}

.containerOffre p{
  color: #ffffff;
  font-size: 1.5rem;
  font-family: Raleway-Regular;
}

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
  width: 40%;
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
  color: #EA6232;
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
  /*border-left: 5px solid #7e80cb;*/
  margin: 2px 20px;
  color: #000;
  font-family: Raleway-Regular;
  font-size: 0.9rem;
}

.listViolet{
  border-left: 5px solid #7e80cb;
}

.listOrange{
  border-left: 5px solid #EA6232;
}

.snip1265 .plan-select {
  background: linear-gradient(to right, #86A8E7, #7e80cb);
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.snip1265 .plan-select a {
  color: #fffefe;
  text-decoration: none;
  padding: 15px 0px;
  margin: 20px 10px;
  border-radius: 40px;
  font-size: 0.75em;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  border: 2px solid #fffefe;
  width: 40%;
}

.snip1265 .plan-select a:hover {
  background-color: #fffefe;
  color: #000;
}

.snip1265 .featured {
  margin: -30px -5px 0 -5px;
  background-color: #fffefe;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.snip1265 .featured .plan-select a {
  margin: 30px 10px;
}


#modal-container {
  z-index: 200000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
}
#modal-container:not(:target) {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s, visibility 1s;
}
#modal-container:target {
  opacity: 1;
  visibility: visible;
  transition: opacity 1s, visibility 1s;
}

.modal {
  background: #fff;
  padding: 2rem;
  text-align: center;
}

.btnClose{
  position: absolute;
  background-color: black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0px px;
  font-size: 1.5em;
  right: 1em;
  top: 1em;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* FORMULAIRE DE CONTACT */

.form {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  padding: 50px 70px 50px 70px;
  background: #fff;
  border-radius: 20px;
  /*box-shadow: 0px 20px 100px rgba(160, 59, 68, 1);*/
}
.modal .form h2 {
  font-size: 1.7rem;
  line-height: 1.1em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin: 0px 0px 20px 0px;
  color: #000000;
}
.modal .form .inputTxt {
  display: block;
  position: relative;
  width: 100%;
  height: 70px;
  padding: 10px 0px 0px 0px;
  margin: 0px 0px 10px 0px;
}
.modal .form .inputTxt input {
  display: block;
  width: 100%;
  height: 42px;
  padding: 0px 0px 0px 4px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #000000;
  border-bottom: 2px solid #000;
  background: transparent;
}
.modal .form .inputTxt input:focus ~ .label, .modal .form .inputTxt input:valid ~ .label {
  top: -6px;
  left: 2px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 600;
  color: #000000;
}
.modal .form .inputTxt input:focus ~ .bar {
  width: 100%;
}
.modal .form .inputTxt input:focus {
  border-bottom: 2px solid #fff;
}
.modal .form .inputTxt .label {
  position: absolute;
  top: 19px;
  left: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #000000;
  pointer-events: none;
}
.modal .form .inputTxt .bar {
  display: block;
  position: absolute;
  bottom: 18px;
  left: 0px;
  width: 0px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(45deg, #00adc1, #7e80cb);
  pointer-events: none;
}
.modal .form button {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  margin: 8em 0px 0px 0px;
  padding: 0px 20px 0px 20px;
  font-weight: 700;
  font-size: 15px;
  line-height: 36px;
  color: #fff;
  border-radius: 25px;
  border: 0px;
  opacity: 1;
  background: linear-gradient(to right, #00adc1, #7e80cb);
  cursor: pointer;
}
.modal .form button:hover {
  box-shadow: 0px 8px 15px #7e80cb;
}
.modal .form .serviceLink {
  display: block;
  width: 100%;
  text-align: center;
  margin: 28px 0px 0px 0px;
  font-size: 11px;
  line-height: 24px;
  font-weight: 700;
  color: #7C8589;
  opacity: 0.5;
}
.modal .form .serviceLink:hover {
  opacity: 1;
}

.labelSelect{
  position: absolute;
  top: 19px;
  left: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #000000;
  pointer-events: none;
}

formfield-select {
  position: relative;
  width: 100%;
}

.formfield-select--container {
  position: relative;
  background-color: #fff;
  border: #000000 1px solid;
  margin: 3em 0 1.5em 0;
  overflow: hidden;
}

.formfield-select--container select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 110%;
  height: auto;
  border: 0;
  margin: 0;
  padding: .75em;
  border-radius: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

textarea
{
  width:100%;
  padding: 1em;
}

textarea::placeholder {
  font-size: 1rem;
}

.textwrapper
{
  border:1px solid #000;
  margin:2em 0;
}

.formfield-select--container::after {
  /* Le pointeur du select */
  content: '';
  position: absolute;
  top: 50%;
  margin-top: -3px;
  right: .75em;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-top-color: #444;
  border-width: 6px;
  border-style: solid;
  pointer-events: none;
}

/* animations */
.form * {
  transition: 0.25s ease-in-out all;
  -moz-transition: 0.25s ease-in-out all;
  -webkit-transition: 0.25s ease-in-out all;
}

/* Small devices (landscape phones, 340px and up) */
@media (min-width: 340px) and (max-width: 767px) {
  .btnClose{
    right: 5em;
    top: 4.5em;
    height: 30px;
    font-size: 15px;
  }
  .modal .form h2{
    margin: 50px 0px 20px 0px;
    font-size: 1.4rem;
  }
  .modal .form button{
    margin: 6em 0px 0px 0px;
  }
}

@media only screen and (max-width: 768px) {
  .containerOffre {
    margin-top: 0;
    padding-top: 15em;
  }
  .listeOffre{
    margin-bottom: 5em;
  }
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

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .listeOffre{
    margin-bottom: 8em
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) {
    .listeOffre{
    margin-bottom: 10em
  }
}

@media (min-width: 1536px) {
  .listeOffre{
    margin-bottom: 12em
  }
}

</style>
