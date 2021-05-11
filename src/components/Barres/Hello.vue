<template>
  <span id="myBtn" class="fixed top-1/2 sayHello"><a href="#modal-container">Say hello</a></span>
  <div id="modal-container">
    <div class="modal">
      <div class="form">
        <a class="btnClose" href="#">✖</a>
        <h2>Contactez-nous !<br> Nous ne mordons pas :)</h2>
        <div class="inputTxt">
          <input type="text" required="" v-model="name"/><span class="bar"></span><span class="label">NOM Prénom</span>
        </div>
        <div class="inputTxt">
          <input type="email" required="" v-model="email"/><span class="bar"></span><span class="label">Email</span>
        </div>
        <div class="inputTxt">
          <input type="tel" required="" v-model="tel"/><span class="bar"></span><span class="label">Téléphone</span>
        </div>
        <div class="inputTxt">
        <label class="labelSelect">Qu'est-ce qui vous amène ?</label>
          <div class="formfield-select">
            <div class="formfield-select--container">
              <select id="mon_select">
                <option value="projet">J'ai un projet à vous présenter</option>
                <option value="rencontre">J'aimerais vous rencontrer</option>
                <option value="collaborer">Je veux collaborer avec vous</option>
                <option value="job">Je veux postuler</option>
                <option value="stage">Je recherche un stage</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>
        </div>

        <div class="inputTxt">
          <div class="textwrapper"><textarea cols="2" rows="4" id="rules" placeholder="Votre message" v-model="message"/></div>
        </div>

        <div class="button">
          <button type="submit">Envoyer</button>
        </div>
      </div>
      
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import emailjs from 'emailjs-com';
import swal from "sweetalert";


export default defineComponent({
  name: "Hello",
  data() {
    return {
      name: '',
      email: '',
      tel: '',
      message: '',
      selected: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_l8twccb', 'template_q8cvqtb', e.target,
            'user_IIORNjcJYo0Dcw6YZHP4E', {
              name: this.name,
              email: this.email,
              message: this.message,
              tel: this.tel,
              selected: this.selected
            })

        swal("Success", "Email envoyé", "Error");

      } catch (error) {
        swal("Error", "Email non envoyé", "Error");
      }
      this.name = ''
      this.email = ''
      this.message = ''
      this.tel = '',
      this.selected = ''
    },
  }
})
</script>

<style scoped>
.sayHello {
  z-index: 120;
  -webkit-transform: translateY(-50%) rotate(-90deg);
  transform: translateY(-50%) rotate(90deg);
  cursor: pointer;
  margin-right: -2.5rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

.sayHello {
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .2rem;
  line-height: .8rem;
  margin-top: -5em;
  left: -1em;
}

.sayHello::after {
  content: '';
  position: absolute;
  width: 5em;
  height: 2px;
  background: #fff;
  top: 0.5em;
  left: 6rem;
  transition: all .25s ease;
}

#modal-container {
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
  .sayHello[data-v-0cdb4400] {
      left: -2.5em;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) and (max-width: 1279px) {

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) {

}

@media (min-width: 1536px) {

}

</style>
