import api from '../api';



export default async function loadSeeds(id) {
  console.log("LOADING Seeds FOR " + id)
  const loadedSeeds = await api.getSeeds(id)
  const seedsData = loadedSeeds.data.data
  console.log(seedsData)
  const seedCollection = []
  for (let index = 0; index < seedsData.length; index++) {
    const seed = seedsData[index]
    seedCollection.push(
      {
        type: seed.type,
        quantity: seed.quantity
      }
    )
  }
  return seedCollection
}
