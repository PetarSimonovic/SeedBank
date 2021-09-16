
// directionaLight is Three.js's daylight equivalent
// values are arbitraty for now

function Sun(props) {

  return (
  <group>
    <directionalLight position={[1.5, 1, 1]} intensity={0.9} />
  </group>
  )
}

export default Sun
