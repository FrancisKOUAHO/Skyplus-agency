<template>
<div class="container fadeInBottom">
	<header class="c-header c-header--archive c-header--project-list">
		<div class="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
			<ul class="c-mouse-vertical-carousel__list js-carousel-list">
				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="0">
					<a href="https://traiteur-cheron.com/">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        Projet 01
                    </span> Août 2020
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
							AUX FINS GASTRONOMES
						</p>
					</a>
				</li>

				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="1">
					<a href="https://kclm.fr/">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        Projet 02
                    </span> 2020
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
							KCLM
						</p>
					</a>
				</li>

				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="2">
					<a href="https://www.kouahofrancis.fr/">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        Projet 03
                    </span> 2020
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
							PORTFOLIO
						</p>
					</a>
				</li>

				<li class="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="3">
					<a href="https://califor.fr/">
						<p class="c-mouse-vertical-carousel__eyebrow u-b4">
							<span>
                        Projet 04
                    </span> 2021
						</p>

						<p class="c-mouse-vertical-carousel__title u-a5">
							Califor
						</p>
					</a>
				</li>

			</ul>

			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('https://skyplus.fr/wp-content/uploads/2020/08/kitchen-2851910_1280-e1596840872303.jpg')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('https://skyplus.fr/wp-content/uploads/2021/01/graffiti-832341_1920.jpg)"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('https://skyplus.fr/wp-content/uploads/2020/08/scrren_portofolio_nav_2.png')"></i>
			<i class="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style="background-image: url('https://skyplus.fr/wp-content/uploads/2021/01/ford-2707122_1920.jpg')"></i>
      <i class="c-gradient-overlay"></i>
		</div>
	</header>
</div>
</template>



<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Gallery2',
  data() {
    return {}
  }
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  min-height: 100vh;
  width: 100%;
  max-width: 900px;
  margin: 0em auto -10em auto;
  -webkit-animation-duration: 2s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 2.5s;
  padding: 35em 0 20em 0;
}

.c-header {
  display: block;
  width: 100%;
}

.u-a5 {
  font-family: Arial;
  font-size: 37px;
  line-height: 35px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.u-b4 {
  font-family: Arial;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.3px;
  font-weight: normal;
  color: #fff;
}

a {
  text-decoration: none;
}

.u-media-wrapper {
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 0;
}
.u-media-wrapper.u-media-wrapper--16-9 {
  padding-bottom: 56.25%;
}

.c-gradient-overlay {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 49% 50%, rgba(2, 21, 25, 0.3), rgba(2, 21, 25, 0.6));
}

.c-mouse-vertical-carousel {
  position: relative;
  overflow: hidden;
}
.c-mouse-vertical-carousel__list {
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 1;
}
.c-mouse-vertical-carousel__list-item a {
  display: block;
  padding-bottom: 25px;
  padding-top: 25px;
  padding-left: 54.1666666667%;
}
.c-mouse-vertical-carousel__eyebrow {
  position: relative;
  padding-bottom: 12px;
}
.c-mouse-vertical-carousel__eyebrow span {
  position: absolute;
  left: -70px;
  top: 0px;
}
.c-mouse-vertical-carousel__title {
  max-width: 450px;
}
.c-mouse-vertical-carousel__bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: transform;
}

/* ANIMATION */

@-webkit-keyframes fadeInBottom {
  0% {
    opacity: 0;
    position: relative;
    top: 50px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0px;
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
    top: 0px;
    /* transform: translateY(-100px); */
  }
}

.fadeInBottom {
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
}


</style>