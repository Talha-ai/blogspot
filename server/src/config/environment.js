// src/config/environment.js
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const environmentConfig = {
  // Database Configuration
  DATABASE: {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME
  },

  // Server Configuration
  SERVER: {
    PORT: process.env.PORT || 4000,
    ENV: process.env.NODE_ENV || 'development'
  },

  // Authentication Configuration
  AUTH: {
    SESSION_SECRET: process.env.SESSION_SECRET,
    MAX_LOGIN_ATTEMPTS: 5,
    LOCK_TIME: 60 * 60 * 1000 // 1 hour
  },

  // Validate required environment variables
  validate() {
    const requiredVars = [
      'DB_USER', 'DB_PASSWORD', 'DB_HOST',
      'DB_PORT', 'DB_NAME', 'SESSION_SECRET'
    ];

    requiredVars.forEach(varName => {
      if (!process.env[varName]) {
        throw new Error(`Missing environment variable: ${varName}`);
      }
    });
  }
};

// Validate on import
environmentConfig.validate();

module.exports = environmentConfig;