<template>
  <div class="flex flex-col w-full items-center">
    <label class="w-full text-white mb-4" for="searchInput">Introduce el CUPS de tu suministro:</label>
    <div class="flex w-full">
      <input id="searchInput" v-model="cups" type="text" autocomplete="off" class="w-full p-2 mr-4">
      <button type="button" aria-label="Buscar" @click="validateCUPSData">
        <img src="/svg/search.svg" alt="" class="w-10 h-10 text-white">
      </button>
    </div>
    <p v-if="isInvalid" class="w-full text-white">Tu suministro no cumple las condiciones para unirse.</p>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',

  data() {
    return {
      cups: '',
      isInvalid: undefined
    }
  },

  methods: {
    async validateCUPSData() {
      if (this.cups) {
        this.isInvalid = await this.$store.dispatch('validateCUPS', this.cups)
        this.cups = ''
      }
    }
  }
}
</script>