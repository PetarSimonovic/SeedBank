
// directionaLight is Three.js's daylight equivalent
// values are arbitraty for now

function Sun(props) {

  return (
  <group>
    <directionalLight position={[2, 1, 2]} intensity={0.5} />
  </group>
  )
}

export default Sun
