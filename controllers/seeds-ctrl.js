
const Seeds = require('../models/seeds-model')

addSeeds = (req, res) => {
  console.log("Adding Seeds!")
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a seed pack',
        })
    }

    const seeds = new Seeds(body)

    if (!seeds) {
        return res.status(400).json({ success: false, error: err })
    }

    seeds
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: seeds._id,
                message: 'Seeds created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Seeds not created!',
            })
        })
}


updateSeeds = async (req, res) => {

    console.log("In UPDATED SEEDS Controller!")
    const body = req.body
    console.log(req.params.userId)
    console.log(req.params.type)

    console.log("Body is")
    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Seeds.findOne({ userId: req.params.userId, type: req.params.type }, (err, seeds) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Seed not found!',
            })
        }
        console.log("Seed is")
        console.log(seeds)
      //  seeds.variants = body.variants
        seeds.quantity = body.quantity
        seeds
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: seeds._id,
                    message: 'Seeds updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Seeds not updated!',
                })
            })
    })
}

getSeeds = async (req, res) => {
    await Seeds.find({ userId: req.params.userId }, (err, seeds) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seeds) {
            return res
                .status(404)
                .json({ success: false, error: `Seeds not found` })
        }
        return res.status(200).json({ success: true, data: seeds })
    }).catch(err => console.log(err))
}




module.exports = {
    addSeeds,
    updateSeeds,
    getSeeds,
}
