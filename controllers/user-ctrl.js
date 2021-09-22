
const User = require('../models/user-model')

createUser = (req, res) => {
  console.log("Creating USER!")
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

getUser = async (req, res) => {
  console.log("In getUser")

    await User.findOne({ name: req.params.name }, (err, user) => {
      console.log("Found user")
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found!!!` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}


updateGarden = async (req, res) => {
    console.log("In Update Garden")
    const body = req.body
    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.garden = body.garden.garden
        user.world = body.world.world
        user.worldChosen = body.worldChosen.worldChosen
        user.seeds = body.seeds.seeds
        user.lastLogin = body.lastLogin.lastLogin
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'Garden updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Garden not updated!',
                })
            })
    })
}


module.exports = {
    createUser,
    getUser,
    updateGarden
}
