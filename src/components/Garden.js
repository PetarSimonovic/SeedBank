import React from 'react';
import ReactDOM from 'react-dom';
import seedBankSoil from './seedBankSoil.png';
import GardenPlot from './GardenPlot.js';
import Plant from './Plant.js'
import styled from 'styled-components';
import api from '../api';


const Wrapper = styled.table.attrs({
})`
    margin: 0 30px;
`


class Garden extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seed: "",
      garden: this.props.garden,
      infoPane: "Choose seed"
    };
    this.generateGarden = this.generateGarden.bind(this)
    this.selectSeed = this.selectSeed.bind(this)
    this.addPlot = this.addPlot.bind(this)
    this.resetSeed = this.resetSeed.bind(this)
    this.updateGarden = this.updateGarden.bind(this)
    this.plantSeed = this.plantSeed.bind(this)
    this.getPlant = this.getPlant.bind(this)

  }




  updatePlantInfo() {
    //this.setState({ plantName: plant.name });
    console.log("Button was Clicked")
  }

  generateGarden () {
    console.log("Generating Garden, size:" + this.props.size + this.state.seed)
    let newRows = []
    for (var i = 0; i < this.props.size; i++) {
    //  console.log("adding row" + i)
      let uniqueKey = "gardenRow_" + i
      newRows.push(<tr id={uniqueKey} key={uniqueKey.toString()}>{this.addPlot(i)}</tr>);
    }
    return newRows
  }

  addPlot(id) {
    var plots = []
    for (var i = 0; i < this.props.size; i++) {
    let uniqueKey = "plot_" + id + "_" + i
    let plantID = id + "_" + i
    let plant = this.getPlant(plantID)
    plots.push(
      <GardenPlot
      key={uniqueKey.toString()}
      id={id + "_" + i}
      plantSeed={this.plantSeed}
      plant={plant}
      seed={this.state.seed} />)
    }
    return plots
  }

  selectSeed() {
    this.setState({
      seed: "Generic Plant",
      infoPane: "Choose a plot for Generic Plant"
    });
    console.log("Seed selected?" + this.state.seed)
 }

  resetSeed() {
      this.setState({
        seed: "",
        infoPane: "Choose seed"
      });
      console.log("Seed selected?" + this.state.seed)
   }

   plantSeed(id) {
     console.log("SEARCHING FOR" + id)
     let plant = this.state.garden.find(x => x.id === id);
     console.log("Plant is " + " " + plant.id + " " + plant.growth)
     plant.grow()
     console.log("Plant is " + " " + plant.id + " " + plant.growth)
     let newGarden = this.state.garden.filter(function(plant) { return plant.id != id; });
     newGarden.push(plant)
     this.setState({ garden: newGarden })
     console.log("PLANT UPDATED")
     this.resetSeed()
   }

   updateGarden(plant) {
     var newGarden = this.state.garden
     newGarden.push(plant)
     this.setState({ garden: newGarden })
   }

   getPlant(plantID) {
    if (!this.state.garden.some(plant => plant.id === plantID)) {
      let newPlant = new Plant(plantID, this.props.date)
      this.updateGarden(newPlant)
    }
    return this.state.garden.find(plant => plant.id === plantID);

   }

   componentDidUpdate() {
     this.saveGarden()
   }

   saveGarden = async () => {
     console.log("Attempting to save garden")
     const garden = {"garden" : this.state.garden }
      await api.updateGarden(this.props.id, garden).then(res => {
            console.log('Garden updated successfully')
            console.log(this.state.garden.length)
        })
   }

  render() {
    return (
    <Wrapper>
      <p>{this.state.infoPane}</p>
      <table className="garden" key="gardenTable" id="gardenTable">
        <tbody>
        {this.generateGarden()}
        </tbody>
      </table>
      <button id="sowSeed" onClick={this.selectSeed}>Generic Plant</button>
    </Wrapper>
    )
 }

}

export default Garden;
