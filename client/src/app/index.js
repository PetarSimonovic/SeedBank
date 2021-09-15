import React from 'react'
import api from '../api';

import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar, SignUpButton, SeedBank } from '../components'
import { SignUp, LogIn, Garden } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        userName: "",
        id: 0,
        garden: []
      }
      this.setUser = this.setUser.bind(this)
      this.connecToServer = this.connecToServer.bind(this)
    }

    componentDidMount() {
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
        garden: garden
      })
      console.log("User is " + this.state.id + " " + this.state.userName)
      console.log(this.state.garden)
    }


    render() {
    return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Router>
            <NavBar user={this.state.userName} setUser={this.setUser} />
          </Router>
          {this.state.userName ?  <Garden id={this.state.id} garden={this.state.garden} /> : <div><LogIn setUser={this.setUser} /> <SignUp setUser={this.setUser} /></div> }
    </div>
    )
  }
}

export default App
