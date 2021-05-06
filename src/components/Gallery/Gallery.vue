<template>
  <main class="container fadeInBottom" style="position: relative;left: 5%;margin-top: 26%; z-index: 0.3">
    <section class="has-dflex-center">
      <div class="lx-container-80">
        <div class="lx-row">
          <div class="lx-card carousel-container">
            <div class="item fade" v-for="(slider, index) in sliders" :key="index">
              <div class="image">
                <img :src="slider.background" :alt="slider.alt"/>
              </div>
              <center>
                <div class="text is-text-left">
                  <h1 class="title">
                    {{ slider.name }}</h1>
                  <p>{{ slider.description }}</p>
                </div>
              </center>
            </div>
            <a class="prev has-dflex-center">
              <i class="fas fa-angle-left"></i>
            </a>
            <a class="next has-dflex-center">
              <i class="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: 'Gallery2',
  data() {
    return {
      sliders: [
        {
          "name": "Aux fins gastronomes",
          "background": "https://skyplus.fr/wp-content/uploads/2020/08/kitchen-2851910_1280-e1596840872303.jpg",
          "logo": "",
          "description": "Cuisine et pâtisse des recettes d’antan tout comme de nouvelles créations conçues en symbiose avec ses salariés",
          "alt": " lgo Aux fins gastronomes"
        },
        {
          "name": "Califor",
          "background": "https://skyplus.fr/wp-content/uploads/2021/01/ford-2707122_1920.jpg",
          "logo": "",
          "description": "CALIFOR, propose des pièces Unisexes, relax et bien pensées, baignant dans l’esprit Rap, sport et quelques références cinématographiques du milieu des années 90.\n",
          "alt": " lgo Califor"
        },
        {
          "name": "KCLM",
          "background": "https://skyplus.fr/wp-content/uploads/2021/01/graffiti-832341_1920.jpg",
          "logo": "",
          "description": "Autorise-toi à avoir de Grands Rêves, avec un grand “G” et un grand “R”, c’est la devise de KCLM, une marque qui travaille avec de nombreux artistes connus comme inconnus.",
          "alt": " lgo KCLM"
        },
        {
          "name": "Francis KOUHO",
          "background": "https://skyplus.fr/wp-content/uploads/2020/08/scrren_portofolio_nav_2.png",
          "logo": "",
          "description": "e pense que le design est comme une “baguette magique”. Si les services et les produits sont magiques pour résoudre les problèmes, le rôle du design est de devenir un support permettant aux utilisateurs de les maîtriser.",
          "alt": " lgo Francis KOUHO"
        },
      ]
    }
  },
})
</script>

<style scoped>
html,
body {
  font-family: "Roboto", sans-serif;
}

main section {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 0;
}

main section .carousel-container {
  width: 100%;
  height: 40rem;
  padding: 0;
  position: relative;
  overflow: hidden;
  border-radius: 0.375rem;
}

main section .carousel-container .item {
  width: 100%;
  height: 100%;
  position: relative;
  display: none;
  animation: fade 0.3s ease-in-out;
}

main section .carousel-container .item .numbertext {
  padding: 0.5rem 0.75rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 0.9375rem;
  font-size: 0.875rem;
  color: #f2f2f2;
  background-color: rgba(0, 0, 0, 0.9);
}

main section .carousel-container .item .image {
  width: 100%;
  height: 100%;
  display: flex;
}

main section .carousel-container .item .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

main section .carousel-container .item .text {
  width: 100%;
  padding: 0.625rem 0.9375rem;
  position: absolute;
  bottom: 0;
  font-size: 0.9rem;
  color: #f2f2f2;
  background-image: linear-gradient(to left bottom, #9f92d1, #9f92d1, #9f92d1, #9f92d1);
}

main section .carousel-container .item .text .title {
  margin: 0.5rem 0 0 0;
  font-size: 1.2rem;
  font-weight: normal;
}

main section .carousel-container .prev,
main section .carousel-container .next {
  width: 2rem;
  height: 2rem;
  padding: 0.3125rem;
  position: absolute;
  top: calc(50% - 1rem);
  user-select: none;
  font-size: 1rem;
  color: #f2f2f2;
  border-radius: 50%;
  transition: 0.6s ease;
}

main section .carousel-container .prev:focus, main section .carousel-container .prev:hover,
main section .carousel-container .next:focus,
main section .carousel-container .next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

main section .carousel-container .prev {
  left: 0.8rem;
}

main section .carousel-container .next {
  right: 0.8rem;
}

main section .carousel-container .dots {
  padding: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

main section .carousel-container .dots .dot {
  width: 0.625rem;
  height: 0.625rem;
  margin: 0 0.125rem;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  background-color: #bbb;
  transition: background-color 0.6s ease;
}

main section .carousel-container .dots .dot:focus, main section .carousel-container .dots .dot:hover {
  background-color: #717171;
}

@-webkit-keyframes fadeInBottom {
  0% {
    opacity: 0;
    position: relative;
    top: 50px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0;
    /* transform: translateY(-100px); */
  }
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    position: relative;
    top: 50px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0;
    /* transform: translateY(-100px); */
  }
}

.fadeInBottom {
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
}


</style>
