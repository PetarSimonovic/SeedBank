import React from 'react'
import api from '../api';
import { WorldData} from '../gameObjects'
import { saveGarden } from '../functions'


import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar, SignUpButton } from '../components'
import { SignUp, LogIn, SeedBank } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        userName: "",
        id: 0,
        garden: [],
        world: {},
        chosenWorld: false,
        seeds: {}
      }
      this.setUser = this.setUser.bind(this)
      this.newWorld = this.newWorld.bind(this)
      this.saveWorld = this.saveWorld.bind(this)
      this.connecToServer = this.connecToServer.bind(this)
    }

    componentDidMount() {
      this.connecToServer();
      }

    connecToServer() {
       fetch('/');
     }


    setUser(userName, id, garden, world, worldChosen, seeds) {
      console.log("SETTING USER")
      console.log("WORLD IS")
      console.log(world)
      console.log("CHOSEN?")
      console.log(worldChosen)
      this.setState({
        userName: userName,
        id: id,
        garden: garden,
        world: world,
        worldChosen: worldChosen,
        seeds: seeds
      })
      console.log("User is " + this.state.id + " " + this.state.userName)
      console.log(this.state.garden)
      console.log(this.state.seeds)
    }

    newWorld() {
      const newWorld = new WorldData()
      this.setState({
        world: newWorld
      })
    }

    saveWorld() {
      this.setState({
        worldChosen: true
      })
      saveGarden(this.state.id, [], this.state.world, true, this.state.seeds)
    }


    render() {
    return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Router>
            <NavBar user={this.state.userName} setUser={this.setUser} />
          </Router>
          {this.state.userName ?  <SeedBank id={this.state.id} newWorld={this.newWorld} world={this.state.world} worldChosen={this.state.worldChosen} saveWorld={this.saveWorld} seeds={this.state.seeds} garden={this.state.garden} /> : <div><LogIn setUser={this.setUser} /> <SignUp setUser={this.setUser} /></div> }
    </div>
    )
  }
}

export default App
