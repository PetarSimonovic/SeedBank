import { setDate, createId } from '../functions'

// Creates a new Plant, with a uniqueID, growth initialised at 0 and a new date
// Variant not yet in use

export default class Plant {

  constructor(userId, position, type) {
    this.userId = userId
    this.type = type
    //this.variant = variant
    this.growth = 0
    this.position = position
    this.date = setDate()
    this.plantId = createId()

  }
}
