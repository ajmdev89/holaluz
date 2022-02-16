export default class SupplyModel {
  constructor(data = {}) {
    this.cups = data.cups
    this.tariff = data.tariff
    this.invoicedAmount = data.invoiced_amount ? Number(data.invoiced_amount) : 0
    this.power = data.power
    this.neighbors = data.neighbors || []
  }
}