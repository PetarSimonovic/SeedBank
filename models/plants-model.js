const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Plants = new Schema(
    {
        userId: { type: String, required: true },
        plantId: { type: String, required: true },
        type: { type: String, required: true},
        growth: { type: Number, required: true},
        position: {type: [Number], required: true},
        date: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('plants', Plants)
