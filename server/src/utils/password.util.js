// src/utils/password.util.js
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

// Hash password
const hashPassword = async (password) => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

// Compare password
const comparePassword = async (inputPassword, hashedPassword) => {
  return bcrypt.compare(inputPassword, hashedPassword);
};

// Password strength validation
const isPasswordStrong = (password) => {
  // At least 8 characters, one uppercase, one lowercase, one number
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return strongRegex.test(password);
};

module.exports = {
  hashPassword,
  comparePassword,
  isPasswordStrong
};