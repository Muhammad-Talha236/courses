import pool from '../config/db.js';
import { hashPassword } from '../utils/password.js';

export const registerUser = async ({ name, email, password }) => {
  const existingUser = await pool.query(
    'SELECT id FROM users WHERE email = $1',
    [email]
  );

  if (existingUser.rows.length > 0) {
    const error = new Error('Email is already registered');
    error.statusCode = 409;
    throw error;
  }

  const passwordHash = await hashPassword(password);

  const result = await pool.query(
    `
      INSERT INTO users (name, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, role, created_at
    `,
    [name, email, passwordHash]
  );

  return result.rows[0];
};