// Modules
const router = require('express').Router();

// Middleware
const {
     auth: {
          auth,
          routePermission
     },
} = require('../middleware');

// Controllers
const {
     UserController
} = require('../controllers');




router.post('/register', UserController.registerUser);
router.get('/get-profile', auth, routePermission(['admin', 'user']), UserController.getProfile);
router.patch('/edit-profile', auth, routePermission(['admin', 'user']), UserController.editProfile);

module.exports = router