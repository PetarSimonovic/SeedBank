
const worldRadiusTop = 1.5
const worldRadiusBottom = 1
const worldScaler = 1.1
const discHeight = 0.3
const rockHeight = 3

export const world = {
  grass: { geometry: [worldRadiusTop, worldRadiusBottom, discHeight, 25], colour: '#5AAB61' }, // cylinder: [radiusTop, radiusBottom, height, radialSegments]
  earth: { geometry: [worldRadiusTop * worldScaler, discHeight * rockHeight, 0.68, 9], colour: '#8a817c' }, // cylinder: [radiusTop, radiusBottom, height, radialSegments]
}
