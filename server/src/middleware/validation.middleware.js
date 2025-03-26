// src/middleware/validation.middleware.js
const Joi = require('joi');

class ValidationMiddleware {
  // Signup validation
  static validateSignup(req, res, next) {
    const schema = Joi.object({
      name: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
          'string.min': 'Name must be at least 2 characters',
          'string.max': 'Name cannot exceed 50 characters'
        }),
      email: Joi.string()
        .email()
        .required()
        .messages({
          'string.email': 'Invalid email format'
        }),
      password: Joi.string()
        .min(8)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)'))
        .required()
        .messages({
          'string.min': 'Password must be at least 8 characters',
          'string.pattern.base': 'Password must include uppercase, lowercase, and number'
        }),
      confirmPassword: Joi.any()
        .equal(Joi.ref('password'))
        .required()
        .messages({
          'any.only': 'Passwords do not match'
        })
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.details[0].message
      });
    }

    next();
  }

  // Login validation
  static validateLogin(req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.details[0].message
      });
    }

    next();
  }
}

module.exports = ValidationMiddleware;