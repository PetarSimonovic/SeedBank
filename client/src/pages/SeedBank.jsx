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


  const [plants, setPlants] = useState(props.garden) //  an array of plant components
  const [chosenSeed, setChosenseed] = useState(null) // contains the type of seed if chosen, or null if no seed is currently selected
  const [seeds, setSeeds] = useState(props.seeds) //  an array of the player's available seeds
  const [seedIndex, setSeedindex] = useState(null) //  the index within seeds of the chosenSeed

  const sowPlant = ( event ) => {
    if (chosenSeed) {
      const newPlant = createPlant(event, chosenSeed)
      setChosenseed(null)
      updateSeeds(-1)
      setPlants( (prev) => {
        return [newPlant, ...prev]
      })
    }
  }

  const selectSeed = (selectedSeed, index) => {
    const seed = seeds[index]
    if (seeds[index].quantity > 0) {
    setChosenseed(selectedSeed)
    setSeedindex(index)
    }
  }

  const updateSeeds = (increment) => {
    let updatedSeed = seeds[seedIndex]
    updatedSeed.quantity += increment
    setSeeds(seeds =>({
      ...seeds,
      [seedIndex]: updatedSeed
    }))
    setSeedindex(null)
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
