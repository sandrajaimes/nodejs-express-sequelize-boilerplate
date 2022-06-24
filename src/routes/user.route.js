const express = require('express');
const userController = require('../controllers/user.controllers');

const router = express.Router();

router.post('/users', userController.createUser)
router.get('/users', userController.getUsers)

module.exports = router;
