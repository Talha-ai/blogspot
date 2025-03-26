const { Pool } = require('pg');
const environmentConfig = require('./environment');

class Database {
  constructor() {
    // Correct way to handle Render's PostgreSQL URL
    const connectionConfig = {
      connectionString: process.env.DB_HOST, // Full PostgreSQL URL
      ssl: {
        rejectUnauthorized: false // Important for cloud databases
      }
    };

    this.pool = new Pool(connectionConfig);

    // Bind methods to the class instance
    this.createSessionsTable = this.createSessionsTable.bind(this);
    this.initializeUsersTable = this.initializeUsersTable.bind(this);

    // Call methods in sequence
    this.initializeDatabaseTables()
      .then(() => this.connect())
      .catch(err => {
        console.error('Initialization error', err);
        process.exit(1);
      });
  }

  async initializeDatabaseTables() {
    const client = await this.pool.connect();
    try {
      // Create sessions table
      await client.query(`
        CREATE TABLE IF NOT EXISTS "user_sessions" (
          "sid" varchar NOT NULL COLLATE "default",
          "sess" json NOT NULL,
          "expire" timestamp(6) NOT NULL
        )
        WITH (OIDS=FALSE);

        ALTER TABLE "user_sessions" 
        ADD CONSTRAINT IF NOT EXISTS "session_pkey" 
        PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

        CREATE INDEX IF NOT EXISTS "IDX_session_expire" 
        ON "user_sessions" ("expire");
      `);
      console.log('Sessions table created successfully');

      // Create users table
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create unique index for users email
      await client.query(`
        CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email ON users(email)
      `);
      console.log('Users table initialized successfully');
    } catch (err) {
      console.error('Error creating database tables', err);
      throw err;
    } finally {
      client.release();
    }
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

  // Expose the pool for direct use if needed
  getPool() {
    return this.pool;
  }
}

module.exports = new Database();