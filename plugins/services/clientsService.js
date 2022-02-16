import ClientModel from '~/src/data-models/ClientModel'

export default (context, inject) => {
  const { $axios } = context

  const clientsService = {
    /**
     * Gets a list of clients
     *
     * @returns {Array[Object]}
     */
    async getClients() {
      const request = await $axios.get('/json/clients.json')
      const data = request ? request.data : []
      const normalizedData = data.map((item) => new ClientModel(item)) 

      return normalizedData
    }
  }

  inject('clientsService', clientsService)
  context.$clientsService = clientsService
}
