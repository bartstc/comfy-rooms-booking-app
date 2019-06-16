const { Router } = require('express');
const router = Router();
const isAuth = require('../middlewares/isAuth');
const isRegistered = require('../middlewares/isRegistered');
const formidable = require('express-formidable');

const hotelController = require('../controllers/hotel');

// USER ROUTES
router.post('/hotel', isAuth, isRegistered, hotelController.createHotel);
router.get('/hotels', isAuth, isRegistered, hotelController.getUserHotels);
router.post('/uploadimage', isAuth, isRegistered, formidable(), hotelController.uploadImage);
router.get('/removeimage', isAuth, isRegistered, hotelController.removeImage);

module.exports = router;