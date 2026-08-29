import express from 'express';import {
  register,
  login,
  getCurrentUser,
  refresh,
  logout,
} from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { loginRateLimiter, registerRateLimiter,  refreshRateLimiter} from '../middlewares/rateLimit.middleware.js';
const router = express.Router();

router.post('/register', registerRateLimiter, register);
router.post('/login', loginRateLimiter, login);
router.get('/me', authenticate, getCurrentUser);
router.post('/refresh', refreshRateLimiter, refresh);
router.post('/logout', authenticate, logout);
export default router;