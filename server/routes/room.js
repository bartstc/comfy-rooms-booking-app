const { Router } = require('express');
const router = Router();
const isAuth = require('../middlewares/isAuth');
const isRegistered = require('../middlewares/isRegistered');

const roomController = require('../controllers/room');

// USER ROUTES
router.post('/room', isAuth, isRegistered, roomController.createRoom);
router.get('/rooms/:hotelId', isAuth, isRegistered, roomController.getHotelRooms);

module.exports = router;