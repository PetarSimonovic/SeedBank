import api from '../api';


export default async function saveGarden(id, plants){
 const garden = {"garden" : plants}
 console.log("Attempting to save garden")
 console.log(garden)
 console.log(id)
  await api.updateGarden(id, garden).then(res => {
        console.log('Garden updated successfully')
        console.log(plants.length)
    })
}
