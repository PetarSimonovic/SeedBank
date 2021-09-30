import api from '../api';

export default async function updateBalloons(balloonId) {
  console.log(balloonId)


  console.log("In UPDATED!")
  await api.updateBalloons(balloonId, {} ).then(res => {
        console.log('Balloon updated successfully')
    })

}
