import {sample, randomiser, createId, calculateDays} from './'
import { Balloon } from '../gameObjects'
import api from '../api';

const defaultQuantity = 3 // default quantity for a pack of new seeds

export default async function loadBalloons(seeds, login, id, today) {
  console.log(seeds)

  const dateDifference = calculateDays(login, today)
  let loadedBalloons = await api.getBalloons(id)
  let balloonData = loadedBalloons.data.data
  console.log("LOADED BALLOONS")

  console.log(balloonData)


  let balloons = parseBalloons(balloonData)
  if (seeds.length > 0) {
    balloons.push(dailyBalloon(seeds))
  }

  console.log("LOADED BALLOONS")
  console.log(balloons)
  return balloons
}

function parseBalloons(balloonData) {
  let parsedBalloons = []
  for (let index = 0; index < balloonData.length; index++) {
    console.log("In parsedballoons")
    const balloon = balloonData[index]
    balloon.balloonId = balloon._id // Can only get the DB to findOne using its own _id! 
    console.log(balloon)
    if (balloon.claimed) {
       continue }
    parsedBalloons.push(Object.assign(new Balloon(), balloon))
  }
  return parsedBalloons
}

function dailyBalloon(seeds, id) {

  // This is not being added to the database at the moment
  const sampleSeeds = sample(seeds)
  const newSeeds = {type: sampleSeeds.type, quantity: defaultQuantity}
  const dailyMessage = `${newSeeds.quantity} x ${newSeeds.type}!`
  return new Balloon(id, newSeeds.type, newSeeds.quantity, dailyMessage)
}
