import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

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
