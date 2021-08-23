import React from 'react'
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar, SignUpButton, Garden, Plant } from '../components'
import { SignUp, LogIn } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        userName: "",
        userID: 0,
        garden: [],
        date: this.setDate()
      }
      this.setUser = this.setUser.bind(this)
    }

    setUser(userName, id, garden) {
      console.log("SETTING USER")
      this.setState({
        userName: userName,
        id: id,
        garden: this.parseGarden(garden)
      })
      console.log("User is " + this.state.id + " " + this.state.userName)
    }

    setDate() {
      const date = new Date()
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      return Number(`${year}${month}${day}`)
    }


    parseGarden(garden) {
      console.log("Garden loaded")
      let parsedGarden = []
      for (let plant = 0; plant < garden.length; plant ++ ) {
        let parsedPlant = Object.assign(new Plant, garden[plant])
        if (this.state.date > parsedPlant.date) {
          parsedPlant.grow()
        }
        parsedGarden.push(parsedPlant)


      }
      return parsedGarden
    }

    render() {
    return (
        <Router>
            <NavBar user={this.state.userName} setUser={this.setUser} />
            {this.state.userName ? <Garden size={5} date={this.state.date} garden={this.state.garden} userName={this.state.userName} id={this.state.id} /> : <div><LogIn setUser={this.setUser} /> <SignUp setUser={this.setUser} /></div>}
          </Router>
    )
  }
}

export default App
