<template>
  <!-- <contact-vue/> -->
  <div class="container displayed container_text">
    <h1>On est pas le grand méchant loup,</h1>
    <h3>mais on a les oreilles pour bien vous écouter </h3>
  </div>
  <div class="flex-initial div-form container_contact">
    <div class="type_contact" v-for="(contact, index) in contacts" :key="index">
      <a href="">
        <span class="contact-info">{{ contact.name }}</span>
      </a>
      <a :href="contact.info" class="contact-name">
        <div style="display: flex; flex-direction: column-reverse">
          <img src="../assets/image/right.svg" alt="right" width="16"/>
          <span>{{ contact.type }}</span>
        </div>
      </a>
    </div>
  </div>
  <reseau-sociaux/>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
// import ContactVue from "@/components/Forms/ContactVue.vue";
import ReseauSociaux from "@/components/Reseaux/ReseauSociaux.vue";

export default defineComponent({
  name: 'Contact',
  components: {ReseauSociaux},
  data() {
    return {
      contacts: [
        {
          name: 'contact@skyplus.fr',
          info: 'mailto:contact@skyplus.fr',
          type: 'MAIL'
        },
        {
          name: '119 rue saint sebastien 78300 Poissy',
          info: 'https://www.google.com/maps/place/119+Rue+Saint-S%C3%A9bastien,+78300+Poissy/@48.939257,2.0577699,17z/data=!3m1!4b1!4m5!3m4!1s0x47e68981cfb2b963:0xad87735df99c91dc!8m2!3d48.939257!4d2.0599586',
          type: 'MAP'        
        },
        {
          name: '06 95 68 68 99',
          info: 'tel:0695686899',
          type: 'TEL'
        }
      ]
    }
  },
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color5')
  }
})
</script>

<style scoped>
.contact-name {
  font-size: 1.2rem;
}

.contact-info {
  font-size: .9rem;
}

#contact .container.displayed .baseline {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .9s;
  transition: all .25s ease .9s;
}

#contact .baseline .action-list {
  position: relative;
  overflow: hidden;
  line-height: 1.1rem;
  height: 1.1rem;
}

.gradient-text {
  background: #4dbeb9;
  background: -webkit-gradient(linear, left top, right top, from(#4dbeb9), to(#a571bf));
  background: linear-gradient(to right, #4dbeb9 0, #a571bf 100%);
  background-clip: border-box;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$turquoise', endColorstr='#a571bf', GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-weight: 600;
  display: inline-block;
  vertical-align: middle;
}

#contact .container {
  color: #000;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

.container {
  max-width: 780px;
  margin: 0 auto;
}

.container_text h1 {
  font-weight: 600;
  font-size: 48px;
  line-height: 1.15;
  color: white;
}

.container_text h3 {
  line-height: 1.15;
  color: white;
  font-family: Raleway-Regular;
  font-size: 2rem;
  text-align: right;
  margin-top: 1em;
}

#contact .container.displayed h1 {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .8s;
  transition: all .25s ease .8s;
}

#contact h1 {
  position: relative;
  z-index: 8;
  color: #000;
  padding: 1rem;
  opacity: 0;
  -webkit-transform: translateX(-1rem);
  transform: translateX(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .container .content {
  position: relative;
  z-index: 8;
  padding: 0 1rem 5rem;
}

#contact .container.displayed .baseline {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .9s;
  transition: all .25s ease .9s;
}

#contact .baseline {
  line-height: 1.3;
  opacity: 0;
  -webkit-transform: translateX(-1rem);
  transform: translateX(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .contacts {
  position: relative;
  margin-top: 9rem;
  zoom: 1;
}

#contact .container {
  color: #000;
}

#contact .baseline .action-list {
  position: relative;
  overflow: hidden;
  line-height: 1.1rem;
  height: 1.1rem;
}

#contact .baseline .action-list div {
  position: absolute;
  left: 0;
  line-height: 1.1rem;
  transition: all .25s ease;
  bottom: -1.1rem;
  margin-bottom: 2.2rem;
  -webkit-transition: margin-bottom .6s ease, bottom 0s .6s;
}

#contact .contacts {
  position: relative;
  margin-top: 9rem;
  zoom: 1;
}

#contact .container.displayed .contacts .col:nth-child(1) {
  -webkit-transition: all .25s ease 1.1s;
  transition: all .25s ease 1.1s;
}

#contact .container.displayed .contacts .col {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

#contact .contacts .col {
  float: left;
  width: 28%;
  opacity: 0;
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .container.displayed .contacts .col:nth-child(4) {
  -webkit-transition: all .25s ease 1.4s;
  transition: all .25s ease 1.4s;
}

#contact .container.displayed .contacts .col {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

#contact .contacts .col.-little {
  width: 16%;
}

#contact .contacts .col {
  float: left;
  width: 28%;
  opacity: 0;
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .contacts .text {
  height: 3rem;
}

#contact .contacts .button {
  position: relative;
  display: block;
  white-space: nowrap;
}

#contact .contacts .social-button {
  width: 2.25rem;
  height: 2.25rem;
  display: inline-block;
  border-radius: 100%;
  border: solid 1px #000;
  margin: 0 .2rem;
  font-size: 0;
  position: relative;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

#contact .container.displayed .baseline {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s ease .9s;
  transition: all .25s ease .9s;
}

#contact .baseline {
  line-height: 1.3;
  opacity: 0;
  -webkit-transform: translateX(-1rem);
  transform: translateX(-1rem);
  -webkit-transition: all .25s ease .25s;
  transition: all .25s ease .25s;
}

#contact .baseline .action-list {
  position: absolute;
  left: 0;
  line-height: 1.1rem;
}

#contact .baseline .action-list div {
  position: absolute;
  left: 0;
  line-height: 1.1rem;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  bottom: -1.1rem;
  margin-bottom: 2.2rem;
  -webkit-transition: margin-bottom .6s ease, bottom 0s .6s;
  transition: margin-bottom .6s ease, bottom 0s .6s;
}

.flex-initial {
  display: flex;
  justify-content: space-between;
  margin-left: 25%;
  margin-top: 5%;
  width: 45%;
}

.div-form {
  color: white;
}

/* Small devices (landscape phones, 340px and up) */
@media (min-width: 340px) and (max-width: 767px) {
  .container_text {
    margin-top: 0;
    padding-top: 15em;
  }

  .container_text h1 {
    font-size: 2.3rem;
    padding: 0.5em;
  }

  .container_text h3 {
    font-size: 1.5rem;
    padding: 0 1em;
    margin: 0 0 2em 0;
  }

  .container_contact {
    display: flex;
    flex-direction: column;
    margin-left: 3em;
  }

  .type_contact {
    margin-top: 1em;
  }

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {
  .container_text {
    margin-top: 15em;
    padding: 2em;
  }

  .flex-initial {
    width: 80%;
    flex-direction: row;
    margin: 5em auto 0 auto;
  }

  section {
    padding: 0 0 25em 0;
    width: 90%;
    margin: 5em auto;
  }

  ul li {
    margin: 5px;
  }

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .container_text {
    margin-top: -10%;
    padding: 2em;
  }

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) {
  .container_text {
    margin-top: -10%;
    padding-top: 12em;
  }

}

@media (min-width: 1536px) {

  .container_text {
    padding-top: 7em;
  }

}



</style>
