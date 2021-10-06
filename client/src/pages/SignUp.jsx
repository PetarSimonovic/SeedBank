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
        let validUsername = false

        await api.getUser(name).then(res => {
          res.status === 204 ? validUsername = true : window.alert(`Username taken`)
        })

        this.setState({
            name: '',
            email: '',
            password: '',
        })

        if (validUsername) {

        await api.addUser(payload).then(res => {
            window.alert(`User added`)
            console.log("SEEDS on SIGN UP")
            console.log(seeds)
            this.props.setUser(name, res.data.id, [], newWorld, false, seeds, lastLogin)
            userId = res.data.id
        })
        console.log("ID is")
        console.log(userId)
        let balloonOne = new Balloon(userId, "generic_plant", 3, `Welcome! 3 generic_plant ${'\n'} seeds - go plant!`)
        let balloonTwo = new Balloon(userId, "tulip", 3, `Welcome! 3 tulip ${'\n'} seeds - get planting!`)
        console.log(balloonOne)
        await api.addBalloons(balloonOne).then(res => {
          console.log("Welcome balloon one added")
        })
        await api.addBalloons(balloonTwo).then(res => {
          console.log("Welcome balloon two added")
        })

      }
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
