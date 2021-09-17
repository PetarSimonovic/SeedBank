import {sample} from '../functions'


const worldRadiusTop = 2.3
const worldRadiusBottom = 1
const worldScaler = 1.1
const discHeight = 0.3
const rockHeight = 0.6

function terrainRandomiser(range) {
  return Math.random() * (range.max - range.min) + range.min
}

function earthColour() {
  const colours = [
    '#6C6460',
    '#8a817c',
    '#6c757d',
  ]

    return sample(colours)
}

function generateStalactite(offset) {
  return { geometry: stalactiteGeometry(offset), position: stalactitePosition(offset), colour: earthColour() }
}

function stalactiteGeometry(offset) {

  const stalactiteMax = {max: 2 - offset, min: 1 - offset}
  const stalactiteMin = {max: 1 - offset, min: 0.1}
  const stalactiteDepth = {max: 2.5, min: 1}
  const stalactiteSegments = {max: 12, min: 4}

  return [
    terrainRandomiser(stalactiteMax),
    terrainRandomiser(stalactiteMin),
    terrainRandomiser(stalactiteDepth),
    terrainRandomiser(stalactiteSegments)
  ]

}

function stalactitePosition(offset) {

  const stalactiteY = {max: 0.2 + offset, min: 1.5 + offset }
  const stalactiteXZ = {max: 0.9, min: -0.9 }
  return [
    terrainRandomiser(stalactiteXZ),
    -terrainRandomiser(stalactiteY),
    terrainRandomiser(stalactiteXZ)
  ]

}


export default class World {

  constructor() {
    this.grass = { geometry: [worldRadiusTop, worldRadiusBottom, discHeight, 25], colour: '#5AAB61'} // cylinder: [radiusTop, radiusBottom, height, radialSegments]
    this.earth = { geometry: [worldRadiusTop * worldScaler, worldRadiusBottom, rockHeight, 9], colour: '#8a817c' } // cylinder: [radiusTop, radiusBottom, height, radialSegments]
    this.stalactite1 = generateStalactite()
    this.stalactite2 = generateStalactite(0.2)
    this.stalactite3 = generateStalactite(0.3)
    this.stalactite4 = generateStalactite(0.4)
    this.stalactite5 = generateStalactite(0.5)
    this.stalactite6 = generateStalactite(0.6)
    this.stalactite7 = generateStalactite(0.7)
    this.stalactite8 = generateStalactite(0.8)
    this.stalactite9 = generateStalactite(0.9)
    this.stalactite10 = generateStalactite(0.9)
  }

}





/*

Original stalactite settings:

Earth disc:
<cylinderGeometry args={[1.65, 1, 0.68, 9]}  />
<meshToonMaterial color={'#8a817c'} />

function createStalactites() {
  return [
    <Stalactite args={[1.6, 0.8, 1, 8]} position={[0.1, -0.28, 0, ]} colour={'#6c757d'}/>,
    <Stalactite args={[1.3, 0.7, 1, 7]} position={[0.12, -0.5, 0.1]} colour={'#8a817c'} />,
    <Stalactite args={[1.4, 0.55, 1.3, 4]} position={[-0, -0.7, 0.05]} colour={'#6c757d'} />,
    <Stalactite args={[0.8, 0.3, 2, 8]} position={[0, -0.9, -0.2]} colour={'#6c757d'} />,
    <Stalactite args={[0.4, 0.01, 2, 4]} position={[0, -1.9, -0.5]} colour={'#6c757d'} />,
    <Stalactite args={[0.4, 0.03, 2, 12]} position={[0, -0.9, 1.0]} colour={'#6c757d'} />,
    <Stalactite args={[0.8, 0.2, 1, 8]} position={[-0, -1.3, .40]} colour={'#8a817c'} />,
    <Stalactite args={[0.7, 0.1, 1, 9]} position={[-0, -1.9, 0.30]} colour={'#6c757d'}/>,
    <Stalactite args={[0.4, 0.01, 3, 8]} position={[0, -2.3, 0]} colour={'#8a817c'} />,



  ]
}
*/
