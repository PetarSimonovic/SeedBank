import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    SeedBank
                </Link>
                    <Link to="/" className="navbar-brand">
                     { this.props.user }
                    </Link>
              </React.Fragment>
        )
    }
}

export default Links
