const router = require('express').Router();


const { UserController } = require('../controllers');




router.post('/register', UserController.registerUser);



module.exports = router