import {sample, randomiser, createId, calculateDays} from '../functions'
import { Balloon } from './'


export default function getBalloons(garden, seeds, login, today) {
  const dateDifference = calculateDays(login, today)
  console.log(dateDifference)
  let balloons = []
  // if (garden.length % 6 === 0) {
  //   console.log("Balloon incoming!")
  // }
  if (calculateDays(login, today) > 0 ) {
    balloons.push(new Balloon())
}

  return balloons
}
