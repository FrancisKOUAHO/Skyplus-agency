<template>
  <main class="flex justify-center">
    <section class="fadeInBottom has-dflex-center">
      <div class="lx-container-80 " style="margin-top: 42%;">
        <div class="lx-row">
          <div class="lx-card carousel-container">
            <div class="item fadeIn" v-for="(slider, index) in sliders" :key="index">
              <div class="image flex justify-center items-center">
                <img class="filter" :src="slider.src" :alt="slider.alt"/>
                <div class="imageFilter"></div>
                <h1 class="title absolute w-full text-center fadeInBottom">
                  {{ slider.name }}</h1>
              </div>

              <div class="flex flex-wrap sliderContent">

                <div class="containerDescription overflow-hidden">
                  <p class="sliderDescription fadeInBottom">{{ slider.description }}</p>
                  <center>
                    <a v-bind:href="slider.link" target="_blank" class="linkSite fadeInRight">Consulter
                      {{ slider.name }}</a>
                  </center>
                </div>


                <div class="containerLogo">
                  <div class="containerImg fadeInRight">
                    <img class="logoEnseigne" :src="slider.logo" :alt="'Logo ' + slider.name"/>
                  </div>
                </div>


              </div>
            </div>
            <a class="prev has-dflex-center -ml-20">
              <i class="fas fa-angle-left"></i>
            </a>
            <a class="next has-dflex-center -mr-20">
              <i class="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import {defineComponent} from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach((carousel) => {
    insertNumbers(carousel);

    carousel.querySelector('.prev').addEventListener('click', (e) => {
      minusItem(carousel);
    });

    carousel.querySelector('.next').addEventListener('click', () => {
      plusItem(carousel);
    });

    insertDots(carousel);

    carousel.querySelectorAll('.dot').forEach((dot) => {
      dot.addEventListener('click', (e) => {
        let item = Array.prototype.indexOf.call(
            e.target.parentNode.children,
            e.target
        );

        showItems(carousel, item);
      });
    });

    showItems(carousel, 0);
  });
});

function insertNumbers(carousel) {
  const length = carousel.querySelectorAll('.item').length;
  // for (let i = 0; i < length; i++) {
  //     const nmbr = document.createElement("div");
  //     nmbr.classList.add("numbertext");
  //     nmbr.innerText = i + 1 + " / " + length;

  //     carousel.querySelectorAll(".item")[i].append(nmbr);
  // }
}

function insertDots(carousel) {
  const dots = document.createElement('div');
  dots.classList.add('dots');

  carousel.append(dots);

  carousel.querySelectorAll('.item').forEach((elem) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    carousel.querySelector('.dots').append(dot);
  });
}

function plusItem(carousel) {
  let item = currentItem(carousel);

  carousel
      .querySelectorAll('.item')[item].nextElementSibling.classList.contains('item')
      ? showItems(carousel, item + 1)
      : showItems(carousel, 0);
}

function minusItem(carousel) {
  let item = currentItem(carousel);

  carousel.querySelectorAll('.item')[item].previousElementSibling != null
      ? showItems(carousel, item - 1)
      : showItems(carousel, carousel.querySelectorAll('.item').length - 1);
}

function currentItem(carousel) {
  return [...carousel.querySelectorAll('.item')].findIndex(
      (item) => item.style.display === 'block'
  );
}

function showItems(carousel, item) {
  if (
      carousel.querySelectorAll('.item')[currentItem(carousel)] != undefined
  )
    carousel.querySelectorAll('.item')[
        currentItem(carousel)
        ].style.display = 'none';
  carousel.querySelectorAll('.item')[item].style.display = 'block';

  if (carousel.querySelector('.dot.active') != null)
    carousel.querySelector('.dot.active').classList.remove('active');
  carousel.querySelectorAll('.dot')[item].classList.add('active');
}

export default defineComponent({
  name: 'Gallery2',
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
        {
          name: "Portfolio",
          src: require('@/assets/image/site_gallery/scrren_portofolio_nav_2.png'),
          logo: require("@/assets/image/site_gallery/logo/logo_francis_2.png"),
          description: "Je pense que le design est comme une “baguette magique”. Si les services et les produits sont magiques pour résoudre les problèmes, le rôle du design est de devenir un support permettant aux utilisateurs de les maîtriser.",
          link: "https://www.kouahofrancis.fr/"
        },
      ]
    }
  },
})
</script>

<style scoped>

h1 {
  font-family: Raleway-Bold, serif;
  color: #fffefe;
  font-size: 5.5rem;
  line-height: 1em;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 0.5s;
}

main section {
  padding: 4rem 0;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 2s;
}

main section .carousel-container {
  width: 100%;
  height: 40rem;
  padding: 0;
  position: relative;
  /* overflow: hidden; */
  border-radius: 0.375rem;
}

main section .carousel-container .item {
  width: 100%;
  height: 100%;
  position: relative;
  display: none;

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
  width: 900px;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
}

.imageFilter {
  background: #d16ba55e;
  width: 100%;
  height: 100%;
  position: absolute;
}

.sliderContent {
  max-width: 70em;
}

.containerDescription {
  width: 70%;
}

.containerLogo {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.containerImg {
  width: 12em;
  background: white;
  height: 12em;
  padding: 0.8em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -5em;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 0.5s;
}

.logoEnseigne {
  width: 100%;
}

.linkSite {
  position: absolute;
  color: #f2f2f2;
  font-family: Raleway-Bold;
  font-size: 1rem;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 0.5s;
}

.sliderDescription {
  font-size: 1.3rem;
  line-height: 1.2em;
  color: #f2f2f2;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 0.5s;
}

main section .carousel-container .item .text .title {
  margin: 0.5rem 0 0 0;
  font-size: 1.2rem;
  font-weight: normal;
}

main section .carousel-container .prev,
main section .carousel-container .next {
  width: 3rem;
  height: 3rem;
  padding: 0.3125rem;
  position: absolute;
  top: calc(50% - 1rem);
  user-select: none;
  font-size: 1rem;
  color: #f2f2f2;
  border-radius: 50%;
  transition: 0.6s ease;
  background: #d16ba5bb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

main section .carousel-container .prev:focus, main section .carousel-container .prev:hover,
main section .carousel-container .next:focus,
main section .carousel-container .next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

main section .carousel-container .prev {
  left: -0rem;
}

main section .carousel-container .next {
  right: 0rem;
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

/* ANIMATION FADE IN BOTTOM */

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
    /* position: absolute; */
    margin-top: 50px;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-top: 0;
    /* transform: translateY(-100px); */
  }
}

.fadeInBottom {
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
}

/* Animation FadeInRight class "FadeInRight"*/

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    /* position: absolute; */
    margin-right: -50px;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-right: 0;
    /* transform: translateY(-100px); */
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    /* position: absolute; */
    margin-right: -50px;
  }
  100% {
    opacity: 1;
    /* position: absolute; */
    margin-right: 0;
    /* transform: translateY(-100px); */
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

/* ANIMATION FADE */

.fadeIn {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Small devices (landscape phones, 340px and up) */
@media (min-width: 340px) and (max-width: 767px) {
  .container_bloc1 {
    background: none;
    padding: 2em;
    width: 100%;
    left: 0em;
    margin: 15em auto 0 auto;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 4em;
  }

  h5 {
    padding-left: 0;
  }

  main section .carousel-container .item .image img {
    height: 50%;
  }

  .imageFilter {
    height: 50%;
  }

  main section .carousel-container .next {
    right: 6rem;
  }

  main section .carousel-container .prev {
    left: 6rem;
  }

  main {
    margin-top: 12rem;
  }

  .sliderContent {
    margin-top: -9rem;
  }

  .sliderDescription {
    font-size: 1.1rem;
  }

  .containerImg {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    position: absolute;
    top: 30em;
    left: 35%;
  }

  .containerDescription {
    width: 100%;
    margin: 3em 2em 0 2em;
  }

  .linkSite {
    margin-top: 1rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {

  main section .carousel-container .item .image img {
    height: 50%;
  }

  .imageFilter {
    height: 50%;
  }


}

/* Large devices (desktops, 992px and up) */
@media (min-width: 1024px) and (max-width: 1279px) {

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1280px) and (max-width: 1535px) {

}

@media (min-width: 1536px) {
  main {
    margin-top: 24rem;
  }

  .sliderContent {
    margin-top: 1.5rem;
  }

  .linkSite {
    margin-left: 15rem;
    margin-top: 2.25rem;
  }
}


</style>
