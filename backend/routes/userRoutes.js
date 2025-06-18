const express = require('express');
const router = express.Router();
const { createUser, getUser } = require('../controllers/userController');

// Route to create a new user
router.post('/create', createUser);

// Route to get a user by email
router.get('/:email', getUser);

module.exports = router;
// This code defines the user routes for creating and retrieving users.
// It uses Express Router to handle POST requests for creating users and GET requests for retrieving a user