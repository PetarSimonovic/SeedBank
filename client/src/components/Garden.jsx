import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds, Earth } from '../components';
import { setDate, parseGarden, saveGarden, createId } from '../functions'
import styled from 'styled-components';


// Garden displays "the world", rendering the sun, the sky, the grass and plants
// Receives instructions/props from the SeedBank page

function Garden(props) {

  return (
    <Canvas id="canvas" className="App" camera={{ position: [0, 1, 2], lookat: [0, 0, 0] }}>
      <Camera />
      <Sun />
      <Suspense fallback={console.log("loading")}>
       <Earth position={[0, -0.18, 0]} />
      <Grass sowPlant={props.sowPlant} position={[0, 0, 0]} />
      {props.plants}
     </Suspense>
    </Canvas>
  )

}

export default Garden
