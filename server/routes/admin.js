const { Router } = require('express');
const router = Router();
const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');

const adminController = require('../controllers/admin');

// ADMIN ROUTES
router.post('/profile', isAuth, isAdmin, adminController.createAdminProfile);
router.put('/register', isAuth, isAdmin, adminController.registerUser);

module.exports = router;