import {sample, randomiser, createId, calculateDays} from './'
import { Balloon } from '../gameObjects'
import api from '../api';

const defaultQuantity = 3 // default quantity for a pack of new seeds

export default async function loadBalloons(seeds, login, id, today) {

  const dateDifference = calculateDays(login, today)
  console.log("DATE DIFFERENCE in loadBalloons: " + dateDifference)
  let loadedBalloons = await api.getBalloons(id)
  let balloonData = loadedBalloons.data.data


  let balloons = parseBalloons(balloonData)

  // NO LONGER SENDING A 'DAILY BALLOON'
  // if (seeds.length > 0) {
  //   balloons.push(dailyBalloon(seeds))
  // }

  return balloons
}

function parseBalloons(balloonData) {
  let parsedBalloons = []
  for (let index = 0; index < balloonData.length; index++) {
    const balloon = balloonData[index]
    balloon.balloonId = balloon._id // Can only get the DB to findOne using its own _id!
    if (balloon.claimed) {
       continue }
    parsedBalloons.push(Object.assign(new Balloon(), balloon))
  }
  return parsedBalloons
}


//NOT IN USE ANYMORE
function dailyBalloon(seeds, id) {

  // This is not being added to the balloon database at the moment
  const sampleSeeds = sample(seeds)
  const newSeeds = {type: sampleSeeds.type, quantity: defaultQuantity}
  const dailyMessage = `${newSeeds.quantity} x ${newSeeds.type}!`
  return new Balloon(id, newSeeds.type, newSeeds.quantity, dailyMessage)
}
