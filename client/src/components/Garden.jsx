import '../style/App.css';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {  Camera, Sun, World, Firmament, Noticeboard, Balloons } from '../components';


// Garden displays "the world", rendering the sun, the sky, the grass and plants
// Receives instructions/props from the SeedBank page

function Garden(props) {

  return (
    <Canvas id="canvas" camera={{ position: [0, 2, 3.5], lookat: [0, 0, 0] }}>
      <Camera />
      <Suspense fallback={console.log("loading")}>
       <World sowPlant={props.sowPlant} position={[0, 0, 0]} world={props.world} />
      {props.plants}
      <Balloons
      removeBalloon={props.removeBalloon}
      updateSeeds={props.updateSeeds}
      balloons={props.balloons}
      seeds={props.seeds} />
     </Suspense>
     <Sun />
     <Firmament />
     <Noticeboard />
    </Canvas>
  )

}

//       <SeedBox seeds={props.seeds} position={[0, 0.2, 0]}/>

export default Garden
