import React from 'react';
// import seedBankSoil from './seedBankSoil.png';
// import seedBankSprout from './seedBankSprout.png'
// import seedBankSprout2 from './seedBankSprout2.png'

class GardenPlot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      planted: false,
      seed: this.props.seed,
    };

    this.handleClick = this.handleClick.bind(this)

  }


  handleClick() {
    console.log("SEED SELECTED " + this.props.seed)
    if (this.props.seed && this.props.plant.growth === 0) {
      this.props.plantSeed(this.props.id)

    }
  }


  render() {
    return (
      <td id={"plant_" + this.props.id} data-testid={"plant_" + this.props.id} key={"plant_" + this.props.id}>
      <button className="App-button" id={this.props.id} data-testid={"button_" + this.props.id} key={"button_" + this.props.id} seed={this.props.seed} onClick={this.handleClick}>
        <img className="plant" src={this.props.plant.image} />
      </button>
      </td>
    )
 }
}

export default GardenPlot;
