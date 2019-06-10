const { Router } = require('express');
const router = Router();
const isAuth = require('../middlewares/isAuth');
const isUser = require('../middlewares/isDefaultUser');

const profileController = require('../controllers/profile');

// USER ROUTES
router.get('/profile', isAuth, profileController.getProfile);
router.post('/user_profile', isAuth, isUser, profileController.createUserProfile);
router.put('/registration', isAuth, isUser, profileController.askForRegistration);

module.exports = router;