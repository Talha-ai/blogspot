// src/models/user.model.js
const db = require('../config/database');
const { hashPassword, comparePassword } = require('../utils/password.util');

class UserModel {
  // Create new user
  static async create(name, email, password) {
    const hashedPassword = await hashPassword(password);

    const query = `
      INSERT INTO users (name, email, password) 
      VALUES ($1, $2, $3) 
      RETURNING id, name, email
    `;

    try {
      const result = await db.query(query, [name, email, hashedPassword]);
      return result.rows[0];
    } catch (error) {
      if (error.code === '23505') {
        throw new Error('Email already exists');
      }
      throw error;
    }
  }

  // Find user by email
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(query, [email]);
    return result.rows[0];
  }

  // Validate user credentials
  static async validateCredentials(email, password) {
    const user = await this.findByEmail(email);
    if (!user) return null;

    const isValid = await comparePassword(password, user.password);
    return isValid ? user : null;
  }
}

module.exports = UserModel;