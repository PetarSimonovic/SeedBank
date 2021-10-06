const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Seeds = new Schema(
    {
        userId: { type: String, required: true },
        type: { type: String, required: true},
        variants: { type: [String], required: true},
        quantity: {type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('seeds', Seeds)
