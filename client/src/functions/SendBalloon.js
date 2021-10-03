import {Balloon} from '../gameObjects'
import api from '../api';

// adds a balloon to the DB
//  Balloon constructor(userId, type, quantity = 0, message, sender = "SeedBank") {


export default async function sendBalloon(userId, type, quantity, message, sender = "SeedBank") {

  //
  console.log("In sendBalloon " + type)

  const balloon = new Balloon(userId, type, quantity, message)
  console.log(balloon)

  await api.addBalloons(balloon).then(res => {
    console.log(`${type} balloon sent!`)
  })

}
