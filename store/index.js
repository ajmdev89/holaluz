import OfferModel from '~/src/data-models/OfferModel'

export const state = () => ({
  cups: undefined,
  currentClientData: {}
})

export const mutations = {
  setCUPS(state, payload) {
    state.cups = payload
  },

  setCurrentClientData(state, payload) {
    state.currentClientData = payload
  }
}

export const actions = {
  /**
   * Validates CUPS data according to client and supply data.
   *
   * @param {Object} Store 
   * @param {String} payload CUPS data
   * @returns {Boolean} Returns true if CUPS is not valid to get offers
   */
  async validateCUPS({ commit }, payload = '') {
    commit('setCUPS', undefined)

    if (payload) {
      const clientsList = await this.$clientsService.getClients()

      if (clientsList && clientsList.length) {
        const currentClient = clientsList.find((clientData) => clientData.cups === payload)

        if (currentClient && currentClient.buildingType === 'house') {
          const suppliesList = await this.$suppliesService.getSupplies()
          const currentSupply = suppliesList.find((supplyData) => supplyData.cups === payload)
          const canHaveOffers = currentSupply.neighbors.length

          if (canHaveOffers) {
            commit('setCUPS', payload)
            commit('setCurrentClientData', currentClient)
            return false
          }
        }
      }
    }

    return true
  },

  /**
   * Gets an offer for client given CUPS data
   *
   * @param {Object} Store 
   * @returns {Object} Offer model with discount and supply data
   */
  async getOffers({ state }) {
    const { cups, currentClientData } = state
    const { address } = currentClientData

    if (cups) {
      const suppliesList = await this.$suppliesService.getSupplies()
      const currentSupply = suppliesList.find((supplyData) => supplyData.cups === cups)
      const { p1: currentP1, p2: currentP2 } = currentSupply.power
      let neighborsTotalInvoice = 0
      let invoiceCondition = false
      let powerCondition = false
      let maxP1 = 0
      let maxP2 = 0
  
      for (const neighbor of currentSupply.neighbors) {
        const neighborData = suppliesList.find((supply) => supply.cups === neighbor)
        const { p1, p2 } = neighborData.power

        maxP1 = p1 > currentP1 ? p1 : maxP1
        maxP2 = p2 > currentP2 ? p2 : maxP2
        neighborsTotalInvoice += neighborData.invoicedAmount
      }
  
      invoiceCondition = neighborsTotalInvoice > 100
      powerCondition = maxP1 < currentP1 && maxP2 < currentP2

      return new OfferModel({ invoiceCondition, powerCondition, cups, address })
    }
  }
}
