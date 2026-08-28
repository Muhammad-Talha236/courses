import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import {
  registerUser,
  loginUser,
  saveRefreshToken,
  validateRefreshToken,
  findUserById,
  revokeRefreshToken,
  revokeAllUserRefreshTokens,
  revokeTokenFamily,
} from "../services/auth.service.js";
import { success } from "zod";
import {
  generateAccessToken,
  generateRefreshToken,
  hashRefreshToken,
  verifyRefreshToken,
} from "../utils/token.js";
import crypto from "crypto";
export const register = async (req, res, next) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const user = await registerUser(validatedData);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const user = await loginUser(validatedData);
    const accessToken = generateAccessToken(user);
    const familyId = crypto.randomUUID();
    const refreshToken = generateRefreshToken(user);

    const refreshTokenHash = hashRefreshToken(refreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await saveRefreshToken({
      userId: user.id,
      tokenHash: refreshTokenHash,
      expiresAt,
      familyId,
    });
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user,
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      const error = new Error("Refresh token is required");
      error.statusCode = 401;
      throw error;
    }

    const decoded = verifyRefreshToken(refreshToken);

    const tokenHash = hashRefreshToken(refreshToken);

    let storedToken;

    try {
      storedToken = await validateRefreshToken(tokenHash);
    } catch (error) {
      if (error.code === "TOKEN_REVOKED" && error.familyId) {
        await revokeTokenFamily(error.familyId);
      }

      throw error;
    }
    if (storedToken.user_id !== decoded.sub) {
      const error = new Error("Invalid refresh token");
      error.statusCode = 401;
      throw error;
    }

    const user = await findUserById(decoded.sub);

    if (!user) {
      const error = new Error("User no longer exists");
      error.statusCode = 401;
      throw error;
    }

    // Revoke old refresh token
    await revokeRefreshToken(storedToken.id);

    // Generate new tokens
    const newAccessToken = generateAccessToken(user);

    const newRefreshToken = generateRefreshToken(user);

    const newRefreshTokenHash = hashRefreshToken(newRefreshToken);

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await saveRefreshToken({
      userId: user.id,
      tokenHash: newRefreshTokenHash,
      expiresAt,
      familyId: storedToken.family_id,
    });

    res.status(200).json({
      success: true,
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    await revokeAllUserRefreshTokens(req.user.sub);

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    next(error);
  }
};
