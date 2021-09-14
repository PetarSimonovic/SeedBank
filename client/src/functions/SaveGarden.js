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
  let extractedPlants = []
  for (let plant = 0; plant < plants.length; plant ++) {
    const parsedPlant = plants[plant].props
    const savedPlant = {date: parsedPlant.date, position: parsedPlant.position}
    extractedPlants.push(savedPlant)
  }
  console.log("ExtractedPlants")
  console.log(extractedPlants)
  return extractedPlants
}
