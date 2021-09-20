import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds, Earth, Firmament } from '../components';
import { Sky } from '@react-three/drei';
import { setDate, parseGarden, saveGarden, createId } from '../functions'
import styled from 'styled-components';
import { EffectComposer, BrightnessContrast, Bloom, GodRays, Pixelation } from '@react-three/postprocessing'
import { BlurPass, BlendFunction, Resizer, KernelSize } from 'postprocessing'
import { World } from '../gameObjects'


// Garden displays "the world", rendering the sun, the sky, the grass and plants
// Receives instructions/props from the SeedBank page

function Garden(props) {

  return (
    <Canvas id="canvas" camera={{ position: [0, 2, 3.5], lookat: [0, 0, 0] }}>
      <Camera />
      <Suspense fallback={console.log("loading")}>
       <Earth sowPlant={props.sowPlant} position={[0, 0, 0]} world={props.world} />
      {props.plants}
     </Suspense>
     <Sun />
     <Firmament />
    </Canvas>
  )

}

export default Garden
