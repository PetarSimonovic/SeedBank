const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')
const BalloonsCtrl = require('../controllers/balloons-ctrl')
const FriendsCtrl = require('../controllers/friends-ctrl')
const SeedsCtrl = require('../controllers/seeds-ctrl')
const PlantsCtrl = require('../controllers/plants-ctrl')



const router = express.Router()
//USER
router.post('/user', UserCtrl.createUser)
router.get('/user/:name', UserCtrl.getUser)
router.put('/user/:id', UserCtrl.updateGarden)

//BALLOONS
router.post('/balloons', BalloonsCtrl.addBalloons)
router.put('/balloons/:id', BalloonsCtrl.updateBalloons)
router.get('/balloons/:userId', BalloonsCtrl.getBalloons)

//FRIENDS
router.post('/friends', FriendsCtrl.addFriends)
router.get('/friends/:userId', FriendsCtrl.getFriends)
router.get('/friend/:friendName/:userId', FriendsCtrl.getFriendByName)

//SEEDS
router.post('/seeds', SeedsCtrl.addSeeds)
router.get('/seeds/:userId', SeedsCtrl.getSeeds)
router.put('/seeds/:userId/:type', SeedsCtrl.updateSeeds)

//PLANTS

router.post('/plants', PlantsCtrl.addPlant)
router.get('/plants/:userId', PlantsCtrl.getPlants)
//router.put('/plants/:id', PlantsCtrl.updatePlants)


module.exports = router
