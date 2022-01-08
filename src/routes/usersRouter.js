const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController')
const validations = require ('../middlewares/validations')


router.post('/register' , validations.registerForm, usersController.register);
router.post('/login' , usersController.login);


module.exports = router;