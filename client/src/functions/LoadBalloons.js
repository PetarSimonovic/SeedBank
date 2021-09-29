import {sample, randomiser, createId, calculateDays} from './'
import { Balloon } from '../gameObjects'
import api from '../api';



export default async function loadBalloons(seeds, login, id, today) {
  console.log("IN LOAD BALLOONS")

  const dateDifference = calculateDays(login, today)
  let loadedBalloons = await api.getBalloons(id)
  let balloonData = loadedBalloons.data.data.balloons



  const newSeeds = sample(seeds)
  const dailyMessage = `${newSeeds.quantity} x ${newSeeds.type}!`
  let balloons = parseBalloons(balloonData)
  balloons.push(dailyBalloon(seeds))
  console.log("LOADED BALLOONS")
  console.log(balloons)
  return balloons
}

function parseBalloons(balloonData) {
  let parsedBalloons = []
  for (let index = 0; index < balloonData.length; index++) {
    const balloon = balloonData[index]
    console.log(balloon)
    parsedBalloons.push(balloon)
  }
  return parsedBalloons
}

function dailyBalloon(seeds) {
  const newSeeds = sample(seeds)
  const dailyMessage = `${newSeeds.quantity} x ${newSeeds.type}!`
  return new Balloon(newSeeds.type, newSeeds.quantity, dailyMessage)
}
