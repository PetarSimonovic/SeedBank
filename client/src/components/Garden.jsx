import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds } from '../components';
import { setDate, parseGarden, saveGarden, createId } from '../functions'
import styled from 'styled-components';

function Garden(props) {

  console.log("GARDEN PROPS in GARDEN")
  console.log(props)

  return (
    <Canvas id="canvas" className="App" background="blue" camera={{ position: [0, 1, 2], lookat: [0, 0, 0] }}>
      <Camera />
      <Sun />
      //      <SkyBox position={[0, 0, 0]}/>
      //<pointLight position={[-10, -10, -10]} />
      <Suspense fallback={console.log("loading")}>
      <Grass sowPlant={props.sowPlant} position={[0, 0, 0]} />
      {props.plants}
     </Suspense>
    </Canvas>
  )

}

export default Garden
