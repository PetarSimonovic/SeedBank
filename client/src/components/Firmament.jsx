import { Sky } from '@react-three/drei'

export default function Firmament(props) {
  return (
    <Sky
      turbidity={5}
      distance={600} // Camera distance (default=450000)
      sunPosition={[900000, 40000, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
      inclination={0.3} // Sun elevation angle from 0 to 1 (default=0)
      elevation={1}
      exposure={0}
      mieDirectionalG={0.3}
      rayleigh={0.8}
      azimuth={0.9} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      {...props} // All three/examples/jsm/objects/Sky props are valid
    />  )
}
