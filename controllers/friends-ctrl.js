
const Friends = require('../models/friends-model')

addFriends = (req, res) => {
  console.log("Adding Friend!")
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a friend',
        })
    }

    const friends = new Friends(body)

    if (!friends) {
        return res.status(400).json({ success: false, error: err })
    }

    friends
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: friends._id,
                message: 'Friend created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Friend not created!',
            })
        })
}


getFriends = async (req, res) => {
    await Friends.find({ userId: req.params.userId }, (err, friends) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!friends) {
            return res
                .status(404)
                .json({ success: false, error: `Friends not found` })
        }
        return res.status(200).json({ success: true, data: friends })
    }).catch(err => console.log(err))
}




module.exports = {
    addFriends,
    getFriends,
}
