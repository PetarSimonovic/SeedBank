const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Friends = new Schema(
    {
        userId: { type: String, required: true },
        friendId: { type: String, required: true},
        friendName: { type: String, required: true},
        friendWorld: {type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('friends', Friends)
