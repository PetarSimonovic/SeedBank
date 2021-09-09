import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Plants } from '../components';
import { setDate, parseGarden, saveGarden } from '../functions'




function Garden(props) {

  const [plants, setPlants] = useState(props.garden)

  function sowPlant( event ) {
    const position = [event.point.x, event.point.y, event.point.z]
    setPlants( (prev) => {
      return [<Plant key={plants.length} date={setDate()} position={position} />, ...prev]
    })
    updateGarden(plants)
    }

    function updateGarden(plants) {
     console.log("Updating garden state")
     console.log(props.id)
     saveGarden(props.id, plants)
   }


  return (
    <Canvas id="canvas" className="App" camera={{ position: [0, 1.5, 2], lookat: [0, 0, 0] }}>
      <Camera />
     <ambientLight intensity={0.1} />
     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={7} />
     //<pointLight position={[-10, -10, -10]} />
     <Suspense fallback={console.log("loading")}>
      <Grass sowPlant={sowPlant} position={[0, 0, 0]} args={[1.5, 1.5, 0.3, 7]} />
      {plants}
      </Suspense>
    </Canvas>
  );
}

export default Garden;
