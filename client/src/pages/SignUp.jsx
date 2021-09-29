import React, { Component } from 'react';
import { WorldData, newSeeds } from '../gameObjects'
import { setDate } from '../functions'


import api from '../api';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleAddUser = async () => {
        const { name, email, password } = this.state
        let id = ""
        const newWorld = new WorldData()
        const world = JSON.stringify(newWorld)
        const seeds = newSeeds()
        const worldChosen = false
        const date = setDate()
        const lastLogin = date.stamp
        const payload = { name, email, password, world, worldChosen, seeds, lastLogin }
        console.log(payload)

        await api.addUser(payload).then(res => {
            window.alert(`User added`)
            this.setState({
                name: '',
                email: '',
                password: '',
            })
            console.log("SEEDS on SIGN UP")
            console.log(seeds)
            this.props.setUser(name, res.data.id, [], newWorld, false, seeds, lastLogin)
            id = res.data.id
        })
        console.log("ID is")
        console.log(id)
    }

    render() {
        const { name, email, password } = this.state
        return (
            <Wrapper>
                <Title>Sign Up</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />

                <Button onClick={this.handleAddUser}>Sign Up</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SignUp
