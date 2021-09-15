import styled from 'styled-components';
import React, { Component } from 'react';

// Generates a panel that contains buttons of available Seeds
// PROTOTYPE ONLY: need to design an interface that coould contain an indefinite number of seeds or objects

const Button = styled.button`
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
  return (
    <Panel>
    <Button onClick={props.selectSeed}> tulip </Button>
    </Panel>
  )
}

export default Seeds
