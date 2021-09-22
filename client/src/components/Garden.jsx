import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds, World, Firmament, Noticeboard, SeedBox, Balloon } from '../components';
import { Sky, Text } from '@react-three/drei';
import { setDate, parseGarden, saveGarden, createId } from '../functions'
import styled from 'styled-components';
import { EffectComposer, BrightnessContrast, Bloom, GodRays, Pixelation } from '@react-three/postprocessing'
import { BlurPass, BlendFunction, Resizer, KernelSize } from 'postprocessing'


// Garden displays "the world", rendering the sun, the sky, the grass and plants
// Receives instructions/props from the SeedBank page

function Garden(props) {

  return (
    <Canvas id="canvas" camera={{ position: [0, 2, 3.5], lookat: [0, 0, 0] }}>
      <Camera />
      <Suspense fallback={console.log("loading")}>
       <World sowPlant={props.sowPlant} position={[0, 0, 0]} world={props.world} />
      {props.plants}
      <Balloon unclaimed={true} updateSeeds={props.updateSeeds} seeds={props.seeds} position={[0, 1.5, 0]}/>

     </Suspense>
     <Sun />
     <Firmament />
     <Noticeboard />
    </Canvas>
  )

}

//       <SeedBox seeds={props.seeds} position={[0, 0.2, 0]}/>

export default Garden
