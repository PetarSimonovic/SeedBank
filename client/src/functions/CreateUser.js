import api from '../api';
import { WorldData, newSeeds, Balloon } from '../gameObjects'
import { setDate } from './'

export default async function createUser(name, email, password) {

  let userId = ""
  const newWorld = new WorldData()
  const world = JSON.stringify(newWorld)
  const seeds = []
  const worldChosen = false
  const date = setDate()
  const lastLogin = date.stamp
  const newUser = true
  const payload = { name, email, password, world, worldChosen, seeds, lastLogin, newUser }
  console.log(payload)

  await api.addUser(payload).then(res => {
      window.alert(`User added`)

      console.log("SEEDS on SIGN UP")
      console.log(seeds)
      userId = res.data.id
  })
  console.log("ID is")
  console.log(userId)
  let balloonOne = new Balloon(userId, "generic_plant", 3, "Welcome to SeedBank!")
  let balloonTwo = new Balloon(userId, "tulip", 3, "Welcome to SeedBank!")
  console.log(balloonOne)
  await api.addBalloons(balloonOne).then(res => {
    console.log("Welcome balloon one added")
  })
  await api.addBalloons(balloonTwo).then(res => {
    console.log("Welcome balloon two added")
  })
}
