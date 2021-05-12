<template>
  <div class="header">
    <div class="navbar">
      <div class="navbar__wrapper">
        <nav class="navbar__menu">
          <router-link :to="{name: 'Accueil'}" class="navbar__brand">
            <svg width="100" height="100" viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="40" y1="45" x2="198" y2="45" stroke="white" stroke-width="10"/>
              <line x1="45" y1="198" x2="45" y2="40" stroke="white" stroke-width="10"/>
              <line x1="193" y1="198" x2="193" y2="148" stroke="white" stroke-width="10"/>
              <line x1="193" y1="90" x2="193" y2="40" stroke="white" stroke-width="10"/>
              <line x1="193" y1="139" x2="193" y2="99" stroke="white" stroke-width="10"/>
              <line x1="173" y1="119" x2="213" y2="119" stroke="white" stroke-width="10"/>
              <line x1="40" y1="193" x2="198" y2="193" stroke="white" stroke-width="10"/>
              <path d="M118.397 144.458L84 128.025V147.334L118.397 165V144.458Z" fill="#FFFEFE"/>
              <path d="M153 110.975V90.6388L118.397 74V93.5147L153 110.975Z" fill="#FFFEFE"/>
              <path
                  d="M118.397 74L153 90.6388V110.975L118.397 93.5147M118.397 74L84 92.0767M118.397 74V93.5147M84 92.0767V110.975L134.051 136.652M84 92.0767L102.743 101.731M134.051 136.652L118.397 144.458M134.051 136.652L153 147.334M118.397 144.458L84 128.025V147.334L118.397 165M118.397 144.458V165M118.397 165L153 147.334M153 147.334V126.381L102.743 101.731M102.743 101.731L118.397 93.5147"
                  stroke="white" stroke-width="5"/>
            </svg>
          </router-link>
          <div id="nav-icon3"><span></span><span></span><span></span><span></span></div>
          <ul class="navbar__nav">
            <li class="navbar__link after-transform">
              <router-link :to="{name: 'Offre'}"
                           class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
                Nos offres
              </router-link>
            </li>
            <li class="navbar__link after-transform">
              <router-link :to="{name: 'Agence'}"
                           class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
                A propos
              </router-link>
            </li>
            <li class="navbar__link after-transform">
              <router-link :to="{name: 'Contact'}"
                           class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
                Contact
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="navbar-responsive">
      <ul class="navbar-responsive__nav">
        <li class="navbar-responsive__link after-transform">
          <router-link :to="{name: 'Offre'}"
                       class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
            Nos offres
          </router-link>
        </li>
        <li class="navbar-responsive__link after-transform">
          <router-link :to="{name: 'Agence'}"
                       class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
            A propos
          </router-link>
        </li>
        <li class="navbar-responsive__link after-transform">
          <router-link :to="{name: 'Contact'}"
                       class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import $ from "jquery";

export default defineComponent({
  name: "NavBarTwo",
  mounted: function () {
    this.$nextTick(function () {
      $(document).ready(function () {
        let state = false,
            links = $('.navbar-responsive__link')
        $('#nav-icon3').click(function () {
          $(this).toggleClass('open');
          if (!state) {
            $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
            state = true
          } else {
            $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
            state = false
          }

        })
        $.each(links, function (index, value) {
          value.addEventListener("click", function () {
            if (!state) {
              $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
              state = true
            } else {
              $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
              state = false
            }
            $('#nav-icon3').removeClass('open')
          })
        })
      })
    })
  }
})
</script>

<style scoped>
.navbar-responsive {
  color: #fff;
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translate3d(-100%, 0, 0);
  transition: 0.3s all ease-in-out;
  z-index: 1000;
}

.navbar-responsive:after {
  content: "";
  z-index: -1;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
}

.navbar-responsive .navbar-responsive__nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 13%;
  transform: translate(-50%, -50%);
  list-style: none;
}

.navbar-responsive .navbar-responsive__nav .navbar-responsive__link {
  text-align: center;
  letter-spacing: 2px;
}

.navbar-responsive .navbar-responsive__nav .navbar-responsive__link a {
  display: block;
  padding: 15px;
  color: #fff;
  text-decoration: none;
}

.navbar-responsive .navbar-responsive__nav .navbar-responsive__link a:after {
  top: 50%;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to right, rgb(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
}


.navbar .navbar__wrapper {
  width: 90%;
  margin: 0 auto;
}

.navbar .navbar__wrapper .navbar__menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar .navbar__wrapper .navbar__menu .navbar__nav {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.navbar .navbar__wrapper .navbar__link a,
.navbar .navbar__wrapper .navbar__brand {
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 12px;
  color: white;
  font-family: Raleway-Regular, sans-serif;
  text-decoration: none;
}

.navbar .navbar__wrapper .navbar__brand {
  font-weight: 700;
  font-size: 1.2em;
}

.navbar .navbar__wrapper .navbar__brand img {
  height: 100%;
}

.after-transform a {
  position: relative;
}

.after-transform a:after {
  content: "";
  transition: all 0.3s ease;
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  transform: scaleX(0) translateZ(0);
  transform-origin: bottom center;
}

.after-transform a.active:after, .after-transform a:hover:after {
  transform: scaleX(1) translateZ(0);
}

/* Icon 3 */
#nav-icon3 {
  width: 30px;
  height: calc(100% / 2);
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  margin-bottom: 12%;
}

#nav-icon3 span {
  display: none;
  position: absolute;
  height: 5px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2), #nav-icon3 span:nth-child(3) {
  top: 9px;
}

#nav-icon3 span:nth-child(4) {
  top: 18px;
}

#nav-icon3.open span:nth-child(1) {
  top: 9px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 9px;
  width: 0%;
  left: 50%;
}

@media (max-width: 768px) {
  .navbar__nav {
    display: none !important;
  }

  #nav-icon3 span {
    display: block !important;
  }
}

@media (min-width: 768px) {
  .navbar__responsive {
    transform: translate3d(-100%, 0, 0) !important;
  }
}
</style>
