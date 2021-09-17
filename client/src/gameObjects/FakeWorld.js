import {sample} from '../functions'


const worldRadiusTop = 0
const worldRadiusBottom = 0
const worldScaler = 0
const discHeight = 0
const rockHeight = 0

export default class FakeWorld {

  constructor() {
    this.grass = { geometry: [worldRadiusTop, worldRadiusBottom, discHeight, 25], colour: '#5AAB61'} // cylinder: [radiusTop, radiusBottom, height, radialSegments]
    this.earth = { geometry: [worldRadiusTop * worldScaler, worldRadiusBottom, rockHeight, 9], colour: '#8a817c' } // cylinder: [radiusTop, radiusBottom, height, radialSegments]
    this.stalactite1 = { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite2 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite3 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite4 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite5 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite6 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite7 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite8 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite9 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
    this.stalactite10 =  { geometry: [0, 0, 0, 0], position: [0, 0, 0], colour: '#5AAB61'}
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
