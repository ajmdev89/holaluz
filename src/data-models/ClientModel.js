export default class ClientModel {
  constructor(data = {}) {
    this.fullName = data.full_name
    this.address = data.address
    this.cups = data.cups
    this.buildingType = data.building_type
  }
}