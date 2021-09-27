import { Billboard, Text } from '@react-three/drei'
import { setDate } from '../functions'


function Noticeboard(props) {
  const date = setDate()

return (

  <Billboard
    position={[0.5, 1, 6]}
    args={[20, 200]}
    follow={true}
    lockX={false}
    lockY={false}
    lockZ={false} // Lock the rotation on the z axis (default=false)
    >
    <Text fontSize={0.5} color={"#857c8d"}>{date.day} {date.month} {date.year}</Text>
    </Billboard>
)
}

export default Noticeboard
