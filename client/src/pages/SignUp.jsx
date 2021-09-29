import React, { Component } from 'react';
import { WorldData, newSeeds, Balloon } from '../gameObjects'
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

    // Chain API/login as follows (??) createUser.Then.addBalloons.Then.setUser

    handleAddUser = async () => {
        const { name, email, password } = this.state
        let userId = ""
        const newWorld = new WorldData()
        const world = JSON.stringify(newWorld)
        const seeds = []
        const worldChosen = false
        const date = setDate()
        const lastLogin = date.stamp
        const newUser = true
        const payload = { name, email, password, world, worldChosen, seeds, lastLogin, newUser }
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
            userId = res.data.id
        })
        console.log("ID is")
        console.log(userId)

        const balloons = [
          new Balloon("generic_plant", 3, "Welcome to SeedBank!"),
          new Balloon("tulip", 3, "Welcome to SeedBank!"),
        ]
        const balloonPayload = { userId, balloons }
        await api.addBalloons(balloonPayload).then(res => {
          console.log("Welcome balloons added")
        })

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
