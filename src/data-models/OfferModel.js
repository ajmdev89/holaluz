export default class OfferModel {
  constructor(data = {}) {


    this.discount = this.getDiscount(data)
    this.cups = data.cups
    this.address = data.address
  }

  getDiscount(data) {
    const { invoiceCondition, powerCondition } = data

    if (invoiceCondition) {
      return 12
    }

    if (powerCondition) {
      return 5
    }

    return 0
  }
}