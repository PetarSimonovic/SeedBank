import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SignUp, LogIn } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        user: ""
      }
    }

    render() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/users/signup" exact component={ SignUp } />
                <Route path="/users/login" exact component={ LogIn } />
            </Switch>
          </Router>
    )
  }
}

export default App
