const { Router } = require('express');
const router = Router();
const isAuth = require('../middlewares/isAuth');

const profileController = require('../controllers/profile');

router.post('/profile', isAuth, profileController.createProfile);

module.exports = router;