const { Pool } = require('pg');

class Database {
  constructor() {
    // Use the full connection string from Render's PostgreSQL database URL
    const connectionConfig = {
      connectionString: process.env.DB_HOST, // Full PostgreSQL URL from Render
      ssl: {
        rejectUnauthorized: false // Important for cloud databases
      },
      max: 20, // connection pool
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000
    };

    this.pool = new Pool(connectionConfig);

    // Bind methods to ensure correct context
    this.connect = this.connect.bind(this);
    this.query = this.query.bind(this);
    this.getClient = this.getClient.bind(this);

    // Initialize connection on startup
    this.connect();
  }

  async connect() {
    try {
      const client = await this.pool.connect();
      console.log('PostgreSQL database connected successfully');
      client.release();
    } catch (err) {
      console.error('Detailed Database connection error', err);
      console.error('Error Message:', err.message);
      console.error('Error Code:', err.code);
      process.exit(1);
    }
  }

  async query(text, params) {
    return this.pool.query(text, params);
  }

  async getClient() {
    return await this.pool.connect();
  }

  // Optional: method to close all pool connections
  async close() {
    await this.pool.end();
  }
}

module.exports = new Database();