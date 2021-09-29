import {sample, randomiser, createId, calculateDays} from './'
import { Balloon } from '../gameObjects'
import api from '../api';

const defaultQuantity = 3 // default quantity for a pack of new seeds

export default async function loadBalloons(seeds, login, id, today) {
  console.log(seeds)

  const dateDifference = calculateDays(login, today)
  let loadedBalloons = await api.getBalloons(id)
  let balloonData = loadedBalloons.data.data.balloons


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
    const balloon = balloonData[index]
    console.log(balloon)
    parsedBalloons.push(new Balloon(balloon.type, balloon.quantity, balloon.message))
  }
  return parsedBalloons
}

function dailyBalloon(seeds) {
  const sampleSeeds = sample(seeds)
  const newSeeds = {type: sampleSeeds.type, quantity: defaultQuantity}
  const dailyMessage = `${newSeeds.quantity} x ${newSeeds.type}!`
  return new Balloon(newSeeds.type, newSeeds.quantity, dailyMessage)
}
