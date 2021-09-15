import api from '../api';

// strips out react components from the state garden array and saves plant props as an object that's easy to parse
// Needs error handling!


export default async function saveGarden(id, plants){
  let savedGarden = extractPlants(plants)
  const garden = {"garden" : savedGarden}
  console.log("Attempting to save garden")
  await api.updateGarden(id, garden).then(res => {
        console.log('Garden updated successfully')
    })
  console.log("SAVED GARDEN")
  console.log(savedGarden)
}

function extractPlants(plants) {
  let extractedPlants = []
  for (let plant = 0; plant < plants.length; plant ++) {
    const key = plants[plant].key
    const parsedPlant = plants[plant].props
    const savedPlant = {key: key, growth: parsedPlant.growth, date: parsedPlant.date, position: parsedPlant.position, plantData: parsedPlant.plantData}
    extractedPlants.push(savedPlant)
  }
  return extractedPlants
}
