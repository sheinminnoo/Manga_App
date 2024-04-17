const express = require('express');
const UserController = require('../controllers/UserController');
const handleErrorMessage = require('../middlewares/handleErrorMessage');
const { body } = require('express-validator');
const router = express.Router();

router.post('/register',
[
    body("username").notEmpty(),
    body("email").notEmpty(),
    body("password").notEmpty(),
    body('cpassword').notEmpty(),
    body('country').notEmpty()
],
handleErrorMessage,UserController.register)
router.post('/login',UserController.login)

module.exports = router