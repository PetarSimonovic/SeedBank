const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Balloons = new Schema(
    {
        user: { type: String, required: true },
        balloons: { type: Array, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('balloons', Balloons)
