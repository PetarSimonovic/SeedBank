import { useRef } from 'react';
// directionaLight is Three.js's daylight equivalent
// values are arbitraty for now

function Sun(props) {
  const mesh = useRef()
  const sunRef = useRef()

  return (
  <group>
    <mesh
      ref={sunRef}
      {...props}
      >
    <directionalLight position={[0, 0.5, 1]} intensity={0.7} />
    </mesh>

  </group>
  )
}

export default Sun
