const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user');

router.post('/signup', userController.signupUser);
router.post('/signin', userController.signinUser);

module.exports = router;