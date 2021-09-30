
const Balloons = require('../models/balloons-model')

addBalloons = (req, res) => {
  console.log("Adding Balloons!")
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a balloon',
        })
    }

    const balloons = new Balloons(body)

    if (!balloons) {
        return res.status(400).json({ success: false, error: err })
    }

    balloons
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: balloons._id,
                message: 'Balloons created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Balloons not created!',
            })
        })
}


updateBalloons = async (req, res) => {

    console.log("In UPDATED BALLOONS")
    const body = req.body

    // if (!body) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'You must provide a body to update',
    //     })
    // }

    Balloons.findOne({ _id: req.params.id }, (err, balloons) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Balloons not found!',
            })
        }
        console.log("BALLOON is")
        console.log(balloons)
        balloons.claimed = true
        balloons
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: balloons._id,
                    message: 'Balloons updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Balloons not updated!',
                })
            })
    })
}

getBalloons = async (req, res) => {
    await Balloons.find({ userId: req.params.userId }, (err, balloons) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!balloons) {
            return res
                .status(404)
                .json({ success: false, error: `Balloons not found` })
        }
        return res.status(200).json({ success: true, data: balloons })
    }).catch(err => console.log(err))
}




module.exports = {
    addBalloons,
    updateBalloons,
    getBalloons,
}
