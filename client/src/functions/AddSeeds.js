import {Seed} from '../gameObjects'
import api from '../api';

// adds a balloon to the DB
//  Balloon constructor(userId, type, quantity = 0, message, sender = "SeedBank") {


export default async function addSeeds(userId, type, quantity = 0) {

  console.log("In addSeeds " + type)

  const seed = new Seed(userId, type, quantity)
  console.log(seed)

  await api.addSeeds(seed).then(res => {
    console.log(`packet of ${type} seeds added!`)
  })

}
