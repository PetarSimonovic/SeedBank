import api from '../api';


export default async function sendBalloon(id, balloonContents) {
  console.log(balloonContents)
  await api.updateBalloons(id, balloonContents).then(res => {
        console.log('Balloons updated successfully')
  })
}
