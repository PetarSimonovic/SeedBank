import {sample, randomiser, createId, calculateDays, balloonColours} from '../functions'


export default class Balloon {
  constructor(userId, type, quantity = 0, message, sender = "SeedBank", colour = sample(balloonColours())) {
    this.balloonId = createId()
    this.userId = userId
    this.colour = colour
    this.position = generatePosition()
    this.type = type
    this.quantity = quantity
    this.message = message
    this.claimed = false
    this.sender = sender
  }
}


function generatePosition() {
  const x = {max: 2, min: -2}
  const y = {max: 1.8, min: 1.5}
  const z = {max: 1.8, min: -1.8}

  return [randomiser(x), randomiser(y), randomiser(z)]
}
