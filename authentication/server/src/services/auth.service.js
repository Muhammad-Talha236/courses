import pool from '../config/db.js';
import { hashPassword } from '../utils/password.js';
import { comparePassword } from '../utils/password.js';

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

export const loginUser = async ({ email, password }) => {
  const result = await pool.query(
    `
      SELECT id, name, email, password_hash, role, created_at
      FROM users
      WHERE email = $1
    `,
    [email]
  );

  const user = result.rows[0];

  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const isPasswordValid = await comparePassword(
    password,
    user.password_hash
  );

  if (!isPasswordValid) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    created_at: user.created_at,
  };
};

export const saveRefreshToken = async ({
  userId,
  tokenHash,
  expiresAt,
  familyId,
}) => {
  const result = await pool.query(
    `
     INSERT INTO refresh_tokens (
  user_id,
  token_hash,
  expires_at,
  family_id
)
VALUES ($1, $2, $3, $4)
RETURNING id, user_id, expires_at, created_at, family_id
    `,
    [userId, tokenHash, expiresAt, familyId]
  );

  return result.rows[0];
};

export const findRefreshToken = async (tokenHash) => {
  const result = await pool.query(
    `
      SELECT
        id,
        user_id,
        token_hash,
        expires_at,
        revoked_at,
        family_id
      FROM refresh_tokens
      WHERE token_hash = $1
    `,
    [tokenHash]
  );

  return result.rows[0];
};

export const validateRefreshToken = async (tokenHash) => {
  const refreshToken = await findRefreshToken(tokenHash);

  if (!refreshToken) {
    const error = new Error('Invalid refresh token');
    error.statusCode = 401;
    error.code = 'TOKEN_NOT_FOUND';
    throw error;
  }

  if (refreshToken.revoked_at) {
    const error = new Error('Refresh token has been revoked');
    error.statusCode = 401;
    error.code = 'TOKEN_REVOKED';
    error.familyId = refreshToken.family_id;
    throw error;
  }

  if (new Date(refreshToken.expires_at) <= new Date()) {
    const error = new Error('Refresh token has expired');
    error.statusCode = 401;
    error.code = 'TOKEN_EXPIRED';
    throw error;
  }

  return refreshToken;
};

export const findUserById = async (userId) => {
  const result = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        role,
        created_at
      FROM users
      WHERE id = $1
    `,
    [userId]
  );

  return result.rows[0];
};

export const revokeRefreshToken = async (tokenId) => {
  const result = await pool.query(
    `
      UPDATE refresh_tokens
      SET revoked_at = NOW()
      WHERE id = $1
        AND revoked_at IS NULL
      RETURNING id, revoked_at
    `,
    [tokenId]
  );

  return result.rows[0];
};

export const revokeAllUserRefreshTokens = async (userId) => {
  await pool.query(
    `
      UPDATE refresh_tokens
      SET revoked_at = NOW()
      WHERE user_id = $1
        AND revoked_at IS NULL
    `,
    [userId]
  );
};

export const revokeTokenFamily = async (familyId) => {
  await pool.query(
    `
      UPDATE refresh_tokens
      SET revoked_at = NOW()
      WHERE family_id = $1
        AND revoked_at IS NULL
    `,
    [familyId]
  );
};