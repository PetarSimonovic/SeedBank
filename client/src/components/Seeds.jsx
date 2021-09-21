import styled from 'styled-components';
import React, { Component } from 'react';

// Generates a panel that contains buttons of available Seeds
// PROTOTYPE ONLY: need to design an interface that coould contain an indefinite number of seeds or objects

const SeedButton = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const Panel = styled.div`
  background-color: lightgrey;
  `;


function Seeds(props) {
  console.log("PROPS SEEDS")
  console.log(props.seeds)
  const seeds = props.seeds

  return (
    <Panel>
    <SeedButton onClick={(event) => props.selectSeed("generic_plant")}>Generic Plant</SeedButton>
    <SeedButton onClick={(event) => props.selectSeed("tulip")}> Tulip </SeedButton>
    <SeedButton onClick={(event) => props.selectSeed("sunflower")}> Sunflower </SeedButton>
    <SeedButton onClick={(event) => props.selectSeed("crocus")}> Crocus </SeedButton>
    </Panel>
  )
}

export default Seeds
