import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { createId } from '../functions'
import { Billboard, Text } from '@react-three/drei'
import * as THREE from "three";


function Noticeboard(props) {

return (

  <Billboard
    position={[0.5, 1, 6]}
    args={[20, 200]}
    onclick={console.log("clicked")}
    follow={true}
    lockX={false}
    lockY={false}
    lockZ={false} // Lock the rotation on the z axis (default=false)
    >
    <Text fontSize={0.5} color={"black"}>SeedBank</Text>
    </Billboard>
)
}

export default Noticeboard
