<template>
  <div class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div
        class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6">
      <div>
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
          <svg class="h-6 w-6 text-red-600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="220.496px" height="220.496px" viewBox="0 0 220.496 220.496"
               style="enable-background:new 0 0 220.496 220.496;"
               xml:space="preserve">
<g>
	<g>
		<path d="M0.003,192.658c0,7.434,2.897,14.424,8.154,19.684c5.257,5.261,12.25,8.154,19.684,8.154
			c7.44,0,14.429-2.894,19.674-8.154l62.732-62.731l62.717,62.72c5.255,5.26,12.244,8.154,19.684,8.154
			c7.44,0,14.436-2.895,19.678-8.154c5.255-5.26,8.155-12.25,8.155-19.684s-2.9-14.424-8.155-19.684l-62.714-62.717l62.727-62.727
			c5.254-5.257,8.154-12.247,8.154-19.681c0-7.434-2.9-14.427-8.154-19.684C207.084,2.897,200.095,0,192.655,0
			c-7.435,0-14.424,2.897-19.678,8.155l-62.724,62.732L47.522,8.155C42.271,2.897,35.281,0,27.847,0
			c-7.44,0-14.433,2.897-19.684,8.155c-5.257,5.257-8.155,12.25-8.155,19.684c0,7.434,2.897,14.423,8.155,19.681l62.732,62.727
			L8.157,172.974C2.9,178.234,0.003,185.224,0.003,192.658z M16.858,181.681l67.08-67.086c1.156-1.152,1.801-2.714,1.801-4.344
			c0-1.631-0.646-3.198-1.801-4.348l-67.08-67.08c-2.939-2.936-4.552-6.836-4.552-10.985c0-4.152,1.618-8.056,4.552-10.989
			c2.939-2.933,6.831-4.552,10.989-4.552c4.149,0,8.055,1.619,10.98,4.552l67.079,67.077c2.306,2.306,6.39,2.306,8.695,0
			l67.07-67.077c5.867-5.873,16.104-5.861,21.972,0c2.937,2.939,4.552,6.836,4.552,10.989c0,4.149-1.615,8.056-4.552,10.985
			l-67.073,67.074c-2.402,2.404-2.402,6.29,0,8.697l67.062,67.056c2.936,2.937,4.545,6.84,4.545,10.989s-1.609,8.053-4.551,10.988
			c-5.85,5.867-16.094,5.873-21.966,0l-67.059-67.056c-2.405-2.407-6.29-2.407-8.695,0l-67.085,67.08
			c-5.846,5.866-16.09,5.872-21.962,0c-2.939-2.937-4.552-6.84-4.552-10.989C12.307,188.515,13.919,184.612,16.858,181.681z"/>
	</g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
            <g>
</g>
</svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Échec du paiement
          </h3>
          <div class="mt-2">
            <p class="text-sm leading-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <router-link :to="{name: 'Offre'}">
          <span class="flex w-full rounded-md shadow-sm">
            <button type="button"
                    class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              Retourner vers nos offres
            </button>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentFailed",
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color7')
  },
}
</script>

<style scoped>

</style>
