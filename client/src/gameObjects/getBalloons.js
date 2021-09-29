import {sample, randomiser, createId, calculateDays} from '../functions'
import { Balloon } from './'
import api from '../api';



export default async function getBalloons(garden, seeds, login, today, id) {
  const dateDifference = calculateDays(login, today)
  // if (calculateDays(login, today) === 0 ) {
  //   return balloons
  // }
  let loadedBalloons = await api.getBalloons(id)
  let balloonData = loadedBalloons.data.data.balloons



  const newSeeds = sample(seeds)
  const dailyMessage = `${newSeeds.quantity} x ${newSeeds.type}!`
  let balloons = parseBalloons(balloonData)
  balloons.push(dailyBalloon(seeds))
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
  const newSeeds = sample(seeds)
  const dailyMessage = `${newSeeds.quantity} x ${newSeeds.type}!`
  return new Balloon(newSeeds.type, newSeeds.quantity, dailyMessage)
}
