<template>
<!--Griglia alternata testo e immagine, resposive con flexbox.-->
<section>
  <div class="grid-flex">
    <div class="col col-image image-left col1">
    <div class="container-logo">
      <img src='@/assets/image/site_gallery/logo/logoauxfinsgastronomes.png' alt="logo" class="img-logo">
    </div>
    </div>
    <div class="col col-text">
      <div class="Aligner-item">
        <h2>Aux fins gastronomes</h2>
        <p>Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés. Cet artiste, épicurien dans l’âme, associe saveur et design pour proposer de nouvelles expériences culinaires répondant aux demandes et aux tendances nutritionnelles actuelles. « Nos métiers nécessitent de s’adapter et de prendre pleinement conscience des envies de nos clients », explique-t-il. Alliant simplicité, créativité et gastronomie, Jean-Pierre Chéron compte bien procurer de nombreuses émotions gustatives à ses clients.</p>
        <a href="https://traiteur-cheron.com/" target="_blank" class="btn">
        Voir le site
        </a>
      </div>
    </div>
  </div>

  <div class="grid-flex">
    <div class="col col-image image-right col2">
      <div class="container-logo">
        <img src='@/assets/image/site_gallery/logo/logocalifor.png' alt="logo" class="img-logo">
      </div>
    </div>
    <div class="col col-text col-left">
      <div class="Aligner-item">
        <h2>Califor</h2>
        <p>CALIFOR, propose des pièces Unisexes, relax et bien pensées, baignant dans l’esprit Rap, sport et quelques références cinématographiques du milieu des années 90.</p>
        <a href="https://califor.fr/" target="_blank" class="btn">
        Voir le site
        </a>
      </div>
    </div>
  </div>

  <div class="grid-flex">
    <div class="col col-image image-left col3">
      <div class="container-logo">
        <img src='@/assets/image/site_gallery/logo/logokclm.png' alt="logo" class="img-logo">
      </div>
    </div>
    <div class="col col-text">
      <div class="Aligner-item">
        <h2>KCLM</h2>
        <p>Autorise-toi à avoir de Grands Rêves, avec un grand “G” et un grand “R”, c’est la devise de KCLM, une marque qui travaille avec de nombreux artistes connus comme inconnus.</p>
        <a href="https://kclm.fr/" target="_blank" class="btn">
        Voir le site
        </a>
      </div>
    </div>
  </div>



</section>
</template>


<script>
import {defineComponent} from 'vue'
import $ from 'jquery'


export default defineComponent({
  name: 'Gallery',
  data() {
    return {
      sliders: [
        {
          name: "Aux fins gastronomes",
          src: require('@/assets/image/site_gallery/auxfinsgastronomes.jpg'),
          logo: require("@/assets/image/site_gallery/logo/logoauxfinsgastronomes.png"),
          description: "Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés",
          link: "https://traiteur-cheron.com/"
        },
        {
          name: "Califor",
          src: require('@/assets/image/site_gallery/ford-2707122_1920.jpg'),
          logo: require("@/assets/image/site_gallery/logo/logocalifor.png"),
          description: "CALIFOR, propose des pièces Unisexes, relax et bien pensées, baignant dans l’esprit Rap, sport et quelques références cinématographiques du milieu des années 90.\n",
          link: "https://califor.fr/"
        },
        {
          name: "KCLM",
          src: require('@/assets/image/site_gallery/graffiti-832341_1920.jpg'),
          logo: require("@/assets/image/site_gallery/logo/logokclm.png"),
          description: "Autorise-toi à avoir de Grands Rêves, avec un grand “G” et un grand “R”, c’est la devise de KCLM, une marque qui travaille avec de nombreux artistes connus comme inconnus.",
          link: "https://kclm.fr/"
        },
      ]
    }
  }
})
</script>

<style scoped>

section {
  margin-top: 15em;
  margin-bottom: 10em;
}

h.col-text {
  height:20em;
}
.grid-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  flex-direction: row;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: wrap;
  -webkit-justify-content: space-around;
}
.col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.image-left {
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}

.image-right{
  display:flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-end;
}

.container-logo {
  width: 13em;
  height: 13em;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-logo{
  width: 70%;
}

.col-left {
  -webkit-box-ordinal-group:-1;
  -webkit-order: -1;
  -ms-flex-order: -1;
  order: -1;
}
.col-text{
  display: flex;
  align-items: center;
  justify-content: center;
}
.Aligner-item {
  width: 70%;
  color: white;
}

.Aligner-item h2 {
  font-family: Raleway-Bold;
  font-size: 3rem;
  line-height: 1em;
  margin-bottom: 0.6em;
  padding-top: 1em;
}

.Aligner-item p {
  font-family: Raleway-Regular;
  font-size: 1.2rem;
}

.col-image {
  background-size: cover;
  background-position:center center;
  padding: 29em 0 0 0;
}

.col1{
  background-image: url('../../assets/image/site_gallery/auxfinsgastronomes.jpg');
}

.col2{
  background-image: url('../../assets/image/site_gallery/ford-2707122_1920.jpg');
}

.col3{
  background-image: url('../../assets/image/site_gallery/graffiti-832341_1920.jpg');
}

.btn {
  border: 2px solid white;
  padding: 0.5em 1.5em;
  font-size: 1rem;
  margin-top: 1em;
  display: inline-block;
  font-family: Raleway-Regular;
  border-radius: 50px;
  transition: all .5s ease-in-out;
}

.btn:hover {
  background: white;
  color: black;
}

@media (max-width: 768px) {
  /* .grid-flex {
    height: 40em;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    flex-direction: column;
   }
  .col {
    order:vertical;
  }
  .col-left {
    -webkit-box-ordinal-group:0;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }
  .col-text div p {
    padding: 1em;
  }
  .Aligner-item {
    width: 90%;
  } */

  .grid-flex {
    display: -webkit-flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin-top: 4em;
   }

  .col-image {
    width: 100%;
  }

  .Aligner-item{
    width: 85%;
    margin-top: 2em;
    padding-top: 4em;
  }
  .container-logo {
    border-radius: 50%;
    position: relative;
    top: 5em;
    right: 2em;
    width: 10em;
    height: 10em;
  }

  .image-right{
    order: 0;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .image-right .container-logo{
    position: relative;
    top: 5em;
    right: 2em;
  }

  .col-left{
    order: 1;
  }

  .btn {
    margin-top: 1.8em;
  }
}





</style>
