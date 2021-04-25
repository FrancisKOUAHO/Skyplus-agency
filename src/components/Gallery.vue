<template>
  <section class="section-projects" id="projects">
    <div class="slider animate">
      <div class="slides">
        <article class="" id="slide" v-for='slide in sliders' :key='slide.index' >
          <img class="image" :src="slide.background">
          <div class="title">{{slide.name}}</div>
          <div class="logo"><img :src="slide.logo"
                                 :alt="slide.name"></div>
          <div class="content">
            <strong>{{slide.description}}</strong>

          </div>
        </article>
      </div>

      <div class="prev" v-on:click="ChangeSlide(-1)"><i class="i-arrow-short"></i></div>
      <div class="next" v-on:click="ChangeSlide(1)"><i class="i-arrow-short"></i></div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

var numero = 0;

export default defineComponent({
  name: "Gallery",
  data(){
    return{
      sliders: [
    {
      "name": "Aux fins gastronomes",
      "background": "/static/projets/auxfinsgastronomes.png",
      "logo": "/static/logo/cropped-logo-cheron2-5.png",
      "description": "Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés",
    },
    {
      "name": "Francis KOUAHO",
      "background": "/static/projets/auxfinsgastronomes.png",
      "logo": "/static/logo/cropped-logo-cheron2-5.png",
      "description": "Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés",
    },
    {
      "name": "Jacky TRUONG",
      "background": "/static/projets/auxfinsgastronomes.png",
      "logo": "/static/logo/cropped-logo-cheron2-5.png",
      "description": "Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés",
    },
    {
      "name": "Arash MORTAZAVI",
      "background": "/static/projets/auxfinsgastronomes.png",
      "logo": "/static/logo/cropped-logo-cheron2-5.png",
      "description": "Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés",
    },
    {
      "name": "Califor",
      "background": "/static/projets/auxfinsgastronomes.png",
      "logo": "/static/logo/cropped-logo-cheron2-5.png",
      "description": "Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés",
    }
  ]
    }
  },
  created(){
    // let comportement = document.getElementsByTagName('article');
    //   if (comportement.classList.contains('active')){
    //     console.log("OK")
    //   }
    document.addEventListener("DOMContentLoaded", function() {

      let comportement = document.getElementsByTagName('article');
      comportement[0].setAttribute('class','active')

      // let article_active = comportement.length; // ça marche 
      // console.log(article_active);
      
      // for (let i=0; i < comportement.length; i++){
      //   if (comportement[i].classList.contains('active')){
           
      //   }
      // }
      //  for (let i=0; i < comportement.length; i++){
      //    if (comportement[i].classList.contains('active')){
      //      console.log(comportement[i]);
      //      comportement[i-1].setAttribute('class', 'left');
      //      comportement[i+1].setAttribute('class', 'right');
      //    }
      //  }
     })
  },
  methods:{
    ChangeSlide(sens){
      let comportement = document.getElementsByTagName('article');
      numero = numero + sens;
      if (numero < 0){
        numero = comportement.length - 1;
        console.log("TEST1")
        comportement[numero].setAttribute('class', 'active');
      }
      if (numero > comportement.length - 1){
        numero = 0;
        console.log("TEST2")
        comportement[numero].setAttribute('class', 'active');
      }
      
     }
    }
})

</script>

<style scoped>
#creations .section-projects {
  margin: 25rem auto 10rem;
  position: relative;
  z-index: 4;
  opacity: 0;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

.slider {
  height: 520px;
  position: relative;
  z-index: 0;
}


.slider::before {
  content: '';
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  width: 930px;
  height: 2px;
  top: 50%;
  margin-top: -1px;
  pointer-events: none;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.slider article.left {
  left: -10%;
  -webkit-transform: rotate(-6deg) scale(0.75) translateZ(0);
  transform: rotate(-6deg) scale(0.75) translateZ(0);
  opacity: .6;
  cursor: pointer;
}

.slider.animate article {
  -webkit-transition: all .8s ease;
  transition: all .8s ease;
}

.slider article {
  width: 780px;
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform-origin: 50% 70%;
  transform-origin: 50% 70%;
  margin-left: -390px;
  z-index: 0;
}

.slider article::before {
  content: '';
  display: block;
  position: relative;
  z-index: 0;
  padding-bottom: 66.66667%;
}

.slider article.left {
  cursor: pointer;
}

.slider article .title {
  position: absolute;
  z-index: 1;
  left: 4rem;
  bottom: 12rem;
  right: 4rem;
  color: #fff;
  font-weight: 600;
  font-size: 4rem;
  line-height: 1;
  opacity: 0;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  -webkit-transform: translateY(-1rem) translateZ(0);
  transform: translateY(-1rem) translateZ(0);
  text-shadow: 4px 5px 20px rgba(0, 0, 0, 0.4);
}

.slider article .logo {
  position: absolute;
  z-index: 1;
  left: 4rem;
  bottom: 4rem;
  background: #000;
  width: 6rem;
  height: 6rem;
  opacity: 0;
  -webkit-transform: translateX(-1rem) translateZ(0);
  transform: translateX(-1rem) translateZ(0);
  padding: 0;
  font-size: 0;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

.slider article .content {
  position: absolute;
  left: 10rem;
  bottom: -2rem;
  right: 4rem;
  background: #fff;
  padding: 1.5rem;
  z-index: 4;
  font-size: .9rem;
  color: #000;
  opacity: 0;
  -webkit-transform: translateY(1rem) translateZ(0);
  transform: translateY(1rem) translateZ(0);
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

.slider article.active {

  z-index: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

}

.slider.animate article {

  -webkit-transition: all .8s ease;
  transition: all .8s ease;

}

.slider article {

  width: 780px;
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform-origin: 50% 70%;
  transform-origin: 50% 70%;
  margin-left: -390px;
  z-index: 0;
}


.slider article::before {

  content: '';
  display: block;
  position: relative;
  z-index: 0;
  padding-bottom: 66.66667%;

}

.slider article .image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  -webkit-transition: all .3s ease-out;
  transition: all .3s ease-out;
}

.slider article.active .logo, .slider article.active .content, .slider article.active .title {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}

.slider article.active .title {
  -webkit-transition: all .25s ease .7s;
  transition: all .25s ease .7s;
}

.slider article.right {
  left: 110%;
  -webkit-transform: rotate(6deg) scale(0.75) translateZ(0);
  transform: rotate(6deg) scale(0.75) translateZ(0);
  opacity: .6;
  cursor: pointer;
}

.slider.animate article {
  -webkit-transition: all .8s ease;
  transition: all .8s ease;
}

.slider article {
  width: 780px;
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform-origin: 50% 70%;
  transform-origin: 50% 70%;
  margin-left: -390px;
  z-index: 0;
}

.slider article.next-right {
  left: 180%;
  -webkit-transform: rotate(12deg) scale(0.5625) translateZ(0);
  transform: rotate(12deg) scale(0.5625) translateZ(0);
  opacity: 0;
}

.slider article.hidden {
  opacity: 0;
}

.slider.animate article {
  -webkit-transition: all .8s ease;
  transition: all .8s ease;
}

.slider article.prev-left {
  left: -80%;
  -webkit-transform: rotate(-12deg) scale(0.5625) translateZ(0);
  transform: rotate(-12deg) scale(0.5625) translateZ(0);
  opacity: 0;
}

.slider .prev {
  margin-left: -480px;
}

.slider .prev, .slider .next {
  width: 41px;
  height: 38px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 1;
  font-size: 0;
}

.slider .next {
  margin-left: 480px;
}

.slider .prev, .slider .next {
  width: 41px;
  height: 38px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 1;
  font-size: 0;
}

.slider .next:hover i {
  -webkit-transform: translateX(4px);
  transform: translateX(4px);
}

.slider .prev i, .slider .next i {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

i.i-arrow-short {
  background-image: url("../assets/icons/arrow-short.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  content: '';
  width: 21px;
  height: 18px;
}


.slider .prev:hover i {
  -webkit-transform: translateX(-4px) rotate(-180deg);
  transform: translateX(-4px) rotate(-180deg);
}

.slider .prev i {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.slider .prev i, .slider .next i {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}

</style>
