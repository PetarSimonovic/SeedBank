
// Variants not yet in use
// Will be collection of (to begin with) available colours, stored as hex strings, for that genus of seed

export default class Seed {
  constructor(userId, type, quantity = 0) {
    this.userId = userId
    this.type = type
    this.quantity = quantity
//    this.variants = []

  }
}
