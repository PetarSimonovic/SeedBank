import api from '../api';

export default async function updateSeed(userId, seed) {
  console.log("In UPDATED SEEDS!")
  console.log(userId)
  console.log(seed.type)
  const payload = {"quantity": seed.quantity}
  await api.updateSeeds(userId, seed.type, payload).then(res => {
        console.log('Seed updated successfully')
    })

}
