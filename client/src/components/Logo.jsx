import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../seedbankProto.png';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://example.com">
                <img src={logo} height="50" alt="seedbank" />
            </Wrapper>
        )
    }
}

export default Logo
