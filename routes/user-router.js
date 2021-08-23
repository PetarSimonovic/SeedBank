const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')



const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/user/:name', UserCtrl.getUser)
router.put('/user/:id', UserCtrl.updateGarden)


module.exports = router
