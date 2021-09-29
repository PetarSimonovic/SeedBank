import {sample, randomiser, createId, calculateDays} from '../functions'
import { Balloon } from './'
import api from '../api';



export default async function getBalloons(garden, seeds, login, today, id) {
  const dateDifference = calculateDays(login, today)
  let balloons = []
  // if (calculateDays(login, today) === 0 ) {
  //   return balloons
  // }

  console.log("BALLOON COMING!")
  balloons.push(new Balloon())
  await api.getBalloons(id).then(res => {
      console.log("BALLOONS ARE:")
      console.log(res)
      let balloonData = res.data.data.balloons
      console.log(balloonData)

  })

}
