import '../style/App.css';
import api from '../api';
import React, { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Grass, Plant, Camera, Sun, SkyBox, Seeds, Garden } from '../components';
import { setDate, parseGarden, saveGarden, createId } from '../functions'
import styled from 'styled-components';




function SeedBank(props) {


  const [plants, setPlants] = useState(props.garden)

  function sowPlant( event ) {
    const position = [event.point.x, event.point.y, event.point.z]
    const key = createId()
    const newPlant = <Plant key={key} growth={0} bloom={2} date={setDate()} position={position} />
    console.log("New Plant")
    console.log(newPlant)
    setPlants( (prev) => {
      return [newPlant, ...prev]
    })
    console.log(`New garden length: ${plants.length}`)
    }

    useEffect(() => {
    // Update the document title using the browser API
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
