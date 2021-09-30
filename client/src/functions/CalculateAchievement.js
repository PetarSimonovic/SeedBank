import { sendBalloon } from './'

// This calculates achievements based on the number of plants in players' garden
// Every five plants either unlocks a new plant or adds more existing seeds
// code below works out whether the player can unlock
// it also adds a balloon to the DB to addive the next day
// This needs refactoring to for separation of concerns/SRP/DRY

export default function calculateAchievement(seeds, id, plantCount) {
  let duplicate = true
  let newSeed = {}
  if (seeds.length === seedBank.length) {
    let bonusSeed = sample(seeds)
    sendBalloon(id, bonusSeed.type, 3, `${plantCount} plants! Bonus ${bonusSeed.type} seeds!`  ) //userId, type, quantity = 0, message, sender = "SeedBank")
    return seeds
    // newSeed = sample(seedBank)
    // console.log("FULL BANK")
    // unlock = false
  } else {
  while (duplicate) {
    newSeed = sample(seedBank)
    duplicate = checkDuplicate(newSeed, seeds, id, plantCount)
  }
}
  return updateSeeds(seeds, newSeed, id, plantCount)
}


function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function checkDuplicate(newSeed, seeds) {
  for (let index = 0; index < seeds.length; index++) {
    const seed = seeds[index]
    if (seed.type === newSeed.type) {
      return true
    }
  }
  return false

}

function updateSeeds(seeds, newSeed, id, plantCount) {
  const updatedSeeds = []
  for (let index = 0; index < seeds.length; index++) {
    const seed = seeds[index]
    if (seed.type === newSeed.type) {
      seed.quantity += newSeed.quantity
    }
    updatedSeeds.push(seed)
  }
  updatedSeeds.push(newSeed)
  sendBalloon(id, newSeed.type, 3, `${plantCount} plants! You've unlocked ${newSeed.type}!`)
  return updatedSeeds
}

const seedBank = [
  {type: "generic_plant", quantity: 3},
  {type: "tulip", quantity: 3},
  {type: "sunflower", quantity: 3},
  {type: "crocus", quantity: 3},
  {type: "snowdrop", quantity: 3},
  {type: "rose", quantity: 3},
  {type: "venusFlyTrap", quantity: 3}
]
