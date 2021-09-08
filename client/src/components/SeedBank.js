import './App.css';
import {setDate} from '../functions'
import React, { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import './App.css';
import { Garden, Plant, Camera, Plants } from './';




function SeedBank() {

  const [plants, setPlants] = useState([])

  function sowPlant( event ) {
    const x = event.point.x
    const y = event.point.y
    const z = event.point.z

    setPlants( (prev) => {
      return [<Plant key={plants.length} date={setDate()} position={[x, y , z]} />, ...prev]
    })
    }

  return (
    <Canvas id="canvas" className="App" camera={{ position: [0, 1.5, 2], lookat: [0, 0, 0] }}>
      <Camera />
     <ambientLight intensity={0.1} />
     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={7} />
     //<pointLight position={[-10, -10, -10]} />
      <Garden sowPlant={sowPlant} position={[0, 0, 0]} args={[1.5, 1.5, 0.3, 7]} />
      {plants}
    </Canvas>
  );
}

export default SeedBank;
