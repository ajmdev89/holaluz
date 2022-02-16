<template>
  <main class="min-h-screen flex flex-col items-center">
    <div class="container h-screen bg-center p-8 md:p-12" :style="formSectionStyleBindings">
      <section class="flex flex-col items-center mx-auto bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg p-8">
        <h1 class="w-full text-white text-4xl text-center">¡Únete a la revolución de los tejados!</h1>

        <SearchInput class="my-8" />
      </section>

      <section v-if="cups" class="container p-8 md:p-12 mt-10 bg-white shadow-lg">
        <OffersData :offer="currentOffer" />
      </section>
    </div>
  </main>
</template>

<script>
import { mapState } from 'Vuex'

export default {
  name: 'LandingPage',

  data() {
    return {
      bgImage: 'url("/images/home-bg.webp")',
      currentOffer: {}
    }
  },

  computed: {
    ...mapState({
      cups: (state) => state.cups
    }),

    formSectionStyleBindings() {
      return {
        backgroundImage: this.bgImage
      }
    }
  },

  watch: {
    cups() {
      if (this.cups) {
        this.checkOffers()
      }
    }
  },

  methods: {
    async checkOffers() {
      this.currentOffer = await this.$store.dispatch('getOffers', this.cups)
      console.log(this.currentOffer)
    }
  }
}
</script>
