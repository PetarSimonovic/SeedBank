const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')
const BalloonsCtrl = require('../controllers/balloons-ctrl')



const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/user/:name', UserCtrl.getUser)
router.put('/user/:id', UserCtrl.updateGarden)
router.post('/balloons', BalloonsCtrl.addBalloons)
router.put('/balloons/:id', BalloonsCtrl.updateBalloons)
router.get('/balloon/:user', BalloonsCtrl.getBalloons)


module.exports = router
