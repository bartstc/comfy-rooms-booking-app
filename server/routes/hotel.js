const { Router } = require('express');
const router = Router();
const isAuth = require('../middlewares/isAuth');
const isRegistered = require('../middlewares/isRegistered');

const hotelController = require('../controllers/hotel');

// USER ROUTES
router.post('/hotel', isAuth, isRegistered, hotelController.createHotel);
router.get('/hotels', isAuth, isRegistered, hotelController.getUserHotels);

module.exports = router;