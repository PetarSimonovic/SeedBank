
const Plant = require('../models/plants-model')

addPlant = (req, res) => {
  console.log("Adding Plant!")
    const body = req.body
    console.log("plant body")
    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a plant',
        })
    }

    const plant = new Plant(body)
    console.log("plant should be")
    console.log(plant)

    if (!plant) {
        return res.status(400).json({ success: false, error: err })
    }

    plant
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: plant._id,
                message: 'Plant created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Plant not created!',
            })
        })
}


updatePlant = async (req, res) => {

    console.log("In UPDATED PLANT Controller!")
    const body = req.body
    console.log(req.params.id)

    console.log("Body is")
    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Plant.findOne({ _id: req.params.id }, (err, plant) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Plant not found!',
            })
        }
        console.log("Plant is")
        console.log(plant)
        plant.growth = body.growth
        plant
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: plant._id,
                    message: 'Plant updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Plant not updated!',
                })
            })
    })
}

getPlants = async (req, res) => {
    await Plant.find({ userId: req.params.userId }, (err, plant) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!plant) {
            return res
                .status(404)
                .json({ success: false, error: `Plant not found` })
        }
        return res.status(200).json({ success: true, data: plant })
    }).catch(err => console.log(err))
}




module.exports = {
    addPlant,
    updatePlant,
    getPlants,
}
