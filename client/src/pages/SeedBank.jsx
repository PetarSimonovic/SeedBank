import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds, Garden, Worlds } from '../components';
import { setDate, parseGarden, saveGarden, createId, createPlant } from '../functions'
import styled from 'styled-components';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing'



// Main page.
// Displays the Garden and the Seed panel, handles interactions between them and updates the user's garden/seedbank

function SeedBank(props) {


  const [plants, setPlants] = useState(props.garden)
  const [seed, setSeed] = useState(null)
  const [seeds, setSeeds] = useState(props.seeds)
  const [index, setIndex] = useState(null)

  const sowPlant = ( event ) => {
    if (seed) {
      const newPlant = createPlant(event, seed)
      setSeed(null)
      updateSeeds(-1)
      setPlants( (prev) => {
        return [newPlant, ...prev]
      })
    }
  }

  const selectSeed = (selectedSeed, index) => {
    setSeed(selectedSeed)
    setIndex(index)
  }

  const updateSeeds = (increment) => {
    console.log("IN UPDATE SEED")
    let updatedSeed = seeds[index]
    console.log(updatedSeed)
    updatedSeed.quantity += increment
    console.log(updatedSeed)
    setSeeds(seeds =>({
      ...seeds,
      [index]: updatedSeed
    }))
    setIndex(null)
  }




  useEffect(() => {
    //
    console.log("Calling saveGarden")
    saveGarden(props.id, plants, props.world, props.worldChosen, props.seeds)
  });


  return (
  <div className="App">
    <Garden plants={plants} world={props.world} seeds={props.seeds} selectSeed={props.selectSeed} sowPlant={sowPlant} />
    {props.worldChosen ? <Seeds seeds={props.seeds} className="App-header" selectSeed={selectSeed} /> : <Worlds className="App-header" newWorld={props.newWorld} saveWorld={ props.saveWorld } />}
  </div>
  );
}

export default SeedBank;
