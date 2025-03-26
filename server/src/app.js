// src/app.js
const express = require('express');
const session = require('express-session');
const PostgreSQLStore = require('connect-pg-simple')(session);
const cors = require('cors');
const helmet = require('helmet');
const environmentConfig = require('./config/environment');
const database = require('./config/database');

// Routes
const authRoutes = require('./routes/auth.routes');

class App {
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  initializeMiddlewares() {
    // Security Middleware
    this.app.use(helmet());

    // CORS
    this.app.use(cors({
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      credentials: true
    }));

    // Body Parsing
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Session Middleware
    this.app.use(session({
      store: new PostgreSQLStore({
        pool: database.pool,
        tableName: 'user_sessions'
      }),
      secret: environmentConfig.AUTH.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: environmentConfig.SERVER.ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
      }
    }));
  }

  initializeRoutes() {
    // Mount auth routes
    this.app.use('/api/auth', authRoutes);

    // Health check route
    this.app.get('/health', (req, res) => {
      res.status(200).json({
        status: 'healthy',
        environment: environmentConfig.SERVER.ENV
      });
    });
  }

  initializeErrorHandling() {
    // 404 handler
    this.app.use((req, res, next) => {
      res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource could not be found'
      });
    });

    // Global error handler
    this.app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
      });
    });
  }

  getApp() {
    return this.app;
  }
}

module.exports = new App();