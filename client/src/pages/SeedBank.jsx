import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds, Garden } from '../components';
import { setDate, parseGarden, saveGarden, createId, createPlant } from '../functions'
import styled from 'styled-components';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing'



// Main page.
// Displays the Garden and the Seed panel, handles interactions between them and updates the user's garden/seedbank

function SeedBank(props) {


  const [plants, setPlants] = useState(props.garden)
  const [seed, setSeed] = useState(null)

  const sowPlant = ( event ) => {
    if (seed) {
      const newPlant = createPlant(event, seed)
      setSeed(null)
      setPlants( (prev) => {
        return [newPlant, ...prev]
      })
    }
  }

  const selectSeed = (selectedSeed) => {
    console.log(selectedSeed)
    setSeed(selectedSeed)
    console.log(seed)
  }




  useEffect(() => {
    //
    console.log("Calling saveGarden")
    saveGarden(props.id, plants)
  });


  return (
  <div className="App">
    <Garden plants={plants} world={props.world} newWorld={props.newWorld} sowPlant={sowPlant} />
    <Seeds className="App-header" newWorld={props.newWorld} selectSeed={selectSeed} />
  </div>
  );
}

export default SeedBank;
