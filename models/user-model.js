const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        world: { type: String, required: true},
        worldChosen: {type: Boolean, required: true},
        lastLogin: {type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
