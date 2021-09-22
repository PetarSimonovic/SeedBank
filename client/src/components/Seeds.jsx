import styled from 'styled-components';
import React, { Component } from 'react';
import { createId } from '../functions'

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
      {seedCollection(props)}
    </Panel>
  )
}

function seedCollection(props) {

  const seeds = props.seeds
  console.log("In SEED COLLECTION")
  console.log(seeds)
  let seedCollection = []

  for (let index = 0; index < seeds.length; index++) {
    const seed = seeds[index]
    seedCollection.push(
      <SeedButton key={createId()} type={seed.type} quantity={seed.quantity} >
      {seed.type} {seed.quantity}
      </SeedButton>
    )
  }

    return seedCollection
}

export default Seeds
