import api from '../api';

// strips out react components from the state garden array and saves plant props as an object that's easy to parse
// Needs error handling!


export default async function saveWorld(id, newWorld){
  console.log("SaveWorld: ID is")
  console.log(id)
  console.log("World is:")
  console.log(newWorld)
  console.log("Attempting to save world")
  const world = {"world" : JSON.stringify(newWorld)}
  console.log(world)
  await api.updateData(id, world).then(res => {
        console.log('World updated successfully')
    })
}
