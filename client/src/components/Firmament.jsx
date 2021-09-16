import { Sky } from '@react-three/drei'

export default function Firmament(props) {
  return (
    <Sky
      turbidity={2}
      distance={450000} // Camera distance (default=450000)
      sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
      inclination={0.4} // Sun elevation angle from 0 to 1 (default=0)
      elevation={0.6}
      exposure={1}
      mieDirectionalG={0.9}
      rayleigh={0.08}
      azimuth={0.6} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      {...props} // All three/examples/jsm/objects/Sky props are valid
    />  )
}
