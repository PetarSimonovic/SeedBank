
export default function calculateAchievement(seeds) {
  let duplicate = true
  let unlock = true
  let newSeed = {}
  if (seeds.length === seedBank.length) {
    return seeds
    // newSeed = sample(seedBank)
    // console.log("FULL BANK")
    // unlock = false
  } else {
  while (duplicate) {
    newSeed = sample(seedBank)
    duplicate = checkDuplicate(newSeed, seeds)
  }
}
  return updateSeeds(seeds, newSeed, unlock)
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

function updateSeeds(seeds, newSeed, unlock) {
  const updatedSeeds = []
  for (let index = 0; index < seeds.length; index++) {
    const seed = seeds[index]
    if (seed.type === newSeed.type) {
      console.log(newSeed)
      seed.quantity += newSeed.quantity
      console.log(seed)
    }
    updatedSeeds.push(seed)
  }
  if (unlock) { updatedSeeds.push(newSeed) }
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
