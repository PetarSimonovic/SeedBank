
// directionaLight is Three.js's daylight equivalent
// values are arbitraty for now

function Sun(props) {

  return (
  <group>
    <directionalLight position={[2.5, 1.3, 2.5]} intensity={0.5} />
  </group>
  )
}

export default Sun
