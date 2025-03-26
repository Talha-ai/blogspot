// src/controllers/auth.controller.js
const UserModel = require('../models/user.model');
const environmentConfig = require('../config/environment');

class AuthController {
  // User Signup
  static async signup(req, res) {
    try {
      const { name, email, password } = req.body;

      // Create user
      const user = await UserModel.create(name, email, password);

      // Create session
      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      res.status(201).json({
        message: 'User created successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      res.status(400).json({
        error: 'Signup failed',
        message: error.message
      });
    }
  }

  // User Login
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validate credentials
      const user = await UserModel.validateCredentials(email, password);

      if (!user) {
        return res.status(401).json({
          error: 'Authentication failed',
          message: 'Invalid credentials'
        });
      }

      // Create session
      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({
        error: 'Login failed',
        message: error.message
      });
    }
  }

  // Logout
  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          error: 'Logout failed',
          message: 'Could not log out'
        });
      }
      res.clearCookie('connect.sid');
      res.json({ message: 'Logged out successfully' });
    });
  }

  // Get Current User
  static getCurrentUser(req, res) {
    if (req.session.user) {
      res.json({ user: req.session.user, isAuthenticated: true });
    } else {
      res.status(401).json({ error: 'Not authenticated' });
    }
  }
}

module.exports = AuthController;