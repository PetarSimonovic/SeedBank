import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar, SignUpButton } from '../components'
import { SignUp, LogIn } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        user: ""
      }
      this.setUser = this.setUser.bind(this)
    }

    setUser(user) {
      this.setState({ user: user})
    }

    render() {
    return (
        <Router>
            <NavBar />
          {this.state.user ? <h1>{this.state.user}</h1> : <LogIn setUser={this.setUser} />}
          </Router>
    )
  }
}

export default App
