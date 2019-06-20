const { Router } = require('express');
const router = Router();
const isAuth = require('../middlewares/isAuth');
const isRegistered = require('../middlewares/isRegistered');

const roomController = require('../controllers/room');

// USER ROUTES
router.post('/room', isAuth, isRegistered, roomController.createRoom);
router.get('/rooms/:hotelId', isAuth, isRegistered, roomController.getHotelRooms);
router.post('/search', roomController.searchForRooms);
router.post('/filter', roomController.filterRooms);
router.get('/room/:id', roomController.getRoom);
router.delete('/room/:id', roomController.removeRoom);

module.exports = router;