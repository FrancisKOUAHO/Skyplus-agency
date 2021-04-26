<template>
  <nav class="nav flex flex-wrap items-center justify-between px-4">
    <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
      <router-link :to="{name: 'Accueil'}">
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
    </div>

    <input class="menu-btn hidden" type="checkbox" id="menu-btn">
    <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
      <span class="navicon bg-grey-darkest flex items-center relative"></span>
    </label>

    <ul class="menu border-b md:border-none flex justify-center list-reset m-0 w-full md:w-auto text-sm">
      <li class="border-t md:border-none hover:text-grey-darker">
        <router-link :to="{name: 'Agence'}"
                     class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
          Agence
        </router-link>
      </li>

      <li class="border-t md:border-none hover:text-grey-darker">
        <router-link :to="{name: 'Creations'}"
                     class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
          Créations
        </router-link>
      </li>

      <li class="border-t md:border-none hover:text-grey-darker">
        <router-link :to="{name: 'Offre'}"
                     class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
          Nos offres
        </router-link>
      </li>

      <li class="border-t md:border-none hover:text-grey-darker">
        <router-link :to="{name: 'Contact'}"
                     class="link-hover after block md:inline-block m-8 py-3 no-underline text-grey-darkest">
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>


<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NavBar',
  data() {
    return {}
  }
})
</script>

<style scoped>

nav{
  z-index: 2;
  position: relative;
}

ul {
  margin-right: 5%;
}

li {
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
}

a, a:hover {

  position: relative;

  text-decoration: none;
  display: flex;
  justify-content: center;
}

a.after:after {
  content: "";
  transition: 0.5s all ease;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  position: absolute;
  bottom: 0.5em;
  height: 1px;
  background: #fffefe !important;
  left: 0px;
  width: 0;
}

a.after:hover:after {
  width: 100%;
}

.link-hover {
  left: 0;
}

@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: .125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: #3D4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
</style>
