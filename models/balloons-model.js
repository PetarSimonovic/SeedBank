const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Balloons = new Schema(
    {
        userId: { type: String, required: true },
        balloonId: { type: String, required: true},
        colour: {type: String, required: true},
        position: { type: Array, required: true },
        type: { type: String, required: true},
        quantity: {type: Number, required: true},
        message: {type: String, required: true },
        claimed: {type: Boolean, required: true},
        sender: {type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('balloons', Balloons)
