// src/routes/auth.routes.js
const express = require('express');
const AuthController = require('../controllers/auth.controller');
const ValidationMiddleware = require('../middleware/validation.middleware');

const router = express.Router();

// Signup Route
router.post(
  '/signup',
  ValidationMiddleware.validateSignup,
  AuthController.signup
);

// Login Route
router.post(
  '/login',
  ValidationMiddleware.validateLogin,
  AuthController.login
);

// Logout Route
router.post('/logout', AuthController.logout);

// Get Current User Route
router.get('/getUser', AuthController.getCurrentUser);

module.exports = router;