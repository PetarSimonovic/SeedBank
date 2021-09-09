import React from 'react'
import api from '../api';

import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar, SignUpButton, SeedBank } from '../components'
import { setDate, parseGarden, saveGarden } from '../functions'
import { SignUp, LogIn, Garden } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        userName: "",
        id: 0,
        garden: [],
        date: setDate()
      }
      this.setUser = this.setUser.bind(this)
      this.connecToServer = this.connecToServer.bind(this)
      this.updateGarden = this.updateGarden.bind(this)
    }

    componentDidMount() {
      console.log("DATE is " + this.state.date)
      this.connecToServer();
      }

    connecToServer() {
       fetch('/');
     }


    setUser(userName, id, garden) {
      console.log("SETTING USER")
      this.setState({
        userName: userName,
        id: id,
        garden: parseGarden(garden, this.state.date)
      })
      console.log("User is " + this.state.id + " " + this.state.userName)
    }

     updateGarden(plants) {
      console.log("Updating garden state")
      this.setState({
        garden: plants
      })
      console.log(this.state.garden)
      saveGarden(this.state.id, this.state.garden)
    }


    render() {
    return (
        <Router>
            <NavBar user={this.state.userName} setUser={this.setUser} />
           {this.state.userName ?  <Garden updateGarden={this.updateGarden} /> : <div><LogIn setUser={this.setUser} /> <SignUp setUser={this.setUser} /></div> }
          </Router>
    )
  }
}

export default App
