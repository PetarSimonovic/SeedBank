import {sample, randomiser} from '../functions'


export default function getBalloons(garden, seeds) {
  console.log("CAlculating balloondata")
  let balloons = []
  // if (garden.length % 6 === 0) {
  //   console.log("Balloon incoming!")
  // }
  balloons.push(new Balloon())
  return balloons
}

class Balloon {
  constructor(seeds) {
    this.colour = generateColour()
    this.position = generatePosition()
  }
}


function generateColour() {
  const colours = [
    "#db504a",
    "#ff6f59",
    "#ffe200",
    "#9bf6ff",
    '#ffd6a5',
    '#caffbf',
    '#ffc6ff',
    '#bdb2ff',
    '#e9ff70',
    '#ff70a6',
    '#ff9770'
  ]
  return sample(colours)
}

function generatePosition() {
  const x = {max: 2, min: -2}
  const y = {max: 1.8, min: 1.5}
  const z = {max: 1.8, min: -1.8}

  return [randomiser(x), randomiser(y), randomiser(z)]
}
