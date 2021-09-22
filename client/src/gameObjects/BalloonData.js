import {sample} from '../functions'


export default function getBalloonData(garden, seeds) {
  console.log("CAlculating balloondata")
  let balloons = []
  // if (garden.length % 6 === 0) {
  //   console.log("Balloon incoming!")
  // }
  balloons.push(new Balloon())
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

}
