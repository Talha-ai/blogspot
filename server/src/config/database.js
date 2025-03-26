// src/config/database.js
const { Pool } = require('pg');
const environmentConfig = require('./environment');

class Database {
  constructor() {
    this.pool = new Pool({
      user: environmentConfig.DATABASE.USER,
      host: environmentConfig.DATABASE.HOST,
      database: environmentConfig.DATABASE.NAME,
      password: environmentConfig.DATABASE.PASSWORD,
      port: environmentConfig.DATABASE.PORT,
      max: 20, // connection pool
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000
    });
    this.connect();
  }

  async connect() {
    try {
      const client = await this.pool.connect();
      console.log('PostgreSQL database connected successfully');
      client.release();
    } catch (err) {
      console.error('Database connection error', err);
      process.exit(1);
    }
  }

  async query(text, params) {
    return this.pool.query(text, params);
  }

  async getClient() {
    return await this.pool.connect();
  }
}

module.exports = new Database();