import api from '../api';


export default async function saveGarden(id, plants){
  let savedGarden = extractPlants(plants)
  const garden = {"garden" : savedGarden}
  console.log("Attempting to save garden")
  console.log(garden)
  console.log(id)
  await api.updateGarden(id, garden).then(res => {
        console.log('Garden updated successfully')
        console.log(plants.length)
    })
}

function extractPlants(plants) {
  console.log("Garden has")
  console.log(plants.length)
  let extractedPlants = []
  for (let plant = 0; plant < plants.length; plant ++) {
    const key = plants[plant].key
    const parsedPlant = plants[plant].props
    const savedPlant = {key: key, date: parsedPlant.date, position: parsedPlant.position}
    extractedPlants.push(savedPlant)
  }
  console.log("ExtractedPlants")
  console.log(extractedPlants)
  return extractedPlants
}
