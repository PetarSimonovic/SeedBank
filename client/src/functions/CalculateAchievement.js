export default function calculateAchievement(seeds) {
  if (seeds.length === seedBank.length) {
    return seeds
  }
  console.log(seeds)
  let duplicate = true
  let newSeed = {}
  while (duplicate) {
    newSeed = sample(seedBank)
    duplicate = checkDuplicate(newSeed, seeds)
  }
  console.log("Chosen seed is")
  console.log(newSeed)
  return updateSeeds(seeds, newSeed)
}


function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function checkDuplicate(newSeed, seeds) {
  for (let index = 0; index < seeds.length; index++) {
    const seed = seeds[index]
    if (seed.type === newSeed.type) {
      console.log(seed.type + " " + newSeed.type )
      console.log("Duplicate " + seed.type + " " + newSeed.type)
      return true
    }
  }
  return false

}

function updateSeeds(seeds, newSeed) {
  const updatedSeeds = []
  console.log("In updateSeeds")
  console.log(seeds)
  console.log("SEEDS LENGTH")
  console.log(seeds.length)
  for (let index = 0; index < seeds.length; index++) {
    console.log("In loop!")
    const seed = seeds[index]
    console.log("Pushing")
    console.log(seed)
    updatedSeeds.push(seed)
    console.log(updatedSeeds)
  }
  updatedSeeds.push(newSeed)
  return updatedSeeds
}


const seedBank = [
  {type: "generic_plant", quantity: 3},
  {type: "tulip", quantity: 3},
  {type: "sunflower", quantity: 3},
  {type: "crocus", quantity: 3}
]
