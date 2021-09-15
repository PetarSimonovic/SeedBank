import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds, Garden } from '../components';
import { setDate, parseGarden, saveGarden, createId, createPlant } from '../functions'
import styled from 'styled-components';


// Main page.
// Displays the Garden and the Seed panel, handles interactions between them and updates the user's garden/seedbank

function SeedBank(props) {


  const [plants, setPlants] = useState(props.garden)

  function sowPlant( event ) {

    setPlants( (prev) => {
      return [createPlant( event ), ...prev]
    })
    }

    useEffect(() => {
    //
    console.log("Calling saveGarden")
    saveGarden(props.id, plants)
  });


  return (
    <div>
    <Garden plants={plants} testProp="testProp" sowPlant={sowPlant} />
    <Seeds />
    </div>
  );
}

export default SeedBank;
