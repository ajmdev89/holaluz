<template>
  <div class="text-black">
    <h2 class="w-full text-4xl text-center mb-8">¡Enhorabuena!</h2>
    <p v-if="offer.discount > 0" class="w-full text-4xl text-center">Podemos ofercerte un descuento del <span class="font-bold text-green-700">{{ offer.discount }}%</span></p>
    <p v-else class="w-full text-4xl text-center">Cumples las condiciones para unirte a la revolución de los tejados</p>

    <h2 class="text-2xl mt-8">Datos del suministro:</h2>
    <ul class="my-4 flex flex-col md:flex-row">
      <li class="w-full md:w-1/2">CUPS: <span class="font-bold">{{ offer.cups }}</span></li>
      <li class="w-full md:w-1/2">Dirección: <span class="font-bold">{{ offer.address }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OffersData',

  props: {
    offer: {
      type: Object,
      required: true
    }
  }
}
</script>