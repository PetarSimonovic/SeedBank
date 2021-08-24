import Plant from './Plant.js'


export default function parseGarden(garden, today) {
  console.log("Garden loaded")
  let parsedGarden = []
  for (let plant = 0; plant < garden.length; plant ++ ) {
    let parsedPlant = Object.assign(new Plant, garden[plant])
    if (today > parsedPlant.date && parsedPlant.growth > 0) {
      let newGrowth = (today - parsedPlant.date)
      console.log(parsedPlant.date)
      console.log("newgrowth is " + newGrowth)
      parsedPlant.grow(newGrowth)
    }
    parsedGarden.push(parsedPlant)
  }
  return parsedGarden
}

//module.exports = parseGarden;
