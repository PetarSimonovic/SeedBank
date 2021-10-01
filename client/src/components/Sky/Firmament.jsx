import { Sky } from '@react-three/drei'

export default function Firmament(props) {
  return (
    <Sky
      turbidity={0.01}
      distance={450000} // Camera distance (default=450000)
      sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
      inclination={0.47} // Sun elevation angle from 0 to 1 (default=0)
      elevation={0.6}
      exposure={0.3}
      mieDirectionalG={0.04}
      mieCoefficient={0.0045}
      rayleigh={0.1}
      azimuth={0.6} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      {...props} // All three/examples/jsm/objects/Sky props are valid
    />  )
}
