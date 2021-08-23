import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


class SignUpButton extends Component {


    render() {
        return (
          <Link to="/users/signup" className="nav-link">
              Sign Up
          </Link>

        )
    }
}

export default SignUpButton
