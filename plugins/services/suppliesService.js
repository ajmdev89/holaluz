import SupplyModel from '~/src/data-models/SupplyModel'

export default (context, inject) => {
  const { $axios } = context

  const suppliesService = {
    /**
     * Gets a list of supplies
     *
     * @returns {Array[Object]}
     */
    async getSupplies() {
      const request = await $axios.get('/json/supply-points.json')
      const data = request ? request.data : []
      const normalizedData = data.map((item) => new SupplyModel(item)) 

      return normalizedData
    }
  }

  inject('suppliesService', suppliesService)
  context.$suppliesService = suppliesService
}
