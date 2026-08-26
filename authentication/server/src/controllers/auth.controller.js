import { registerSchema, loginSchema } from '../validators/auth.validator.js';
import { registerUser, loginUser } from '../services/auth.service.js';
import { success } from 'zod';
import { generateAccessToken } from '../utils/token.js';
export const register = async (req, res, next) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const user = await registerUser(validatedData);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async(req,res,next) => {
  try{
    const validatedData = loginSchema.parse(req.body);
    const user = await loginUser(validatedData);
const accessToken = generateAccessToken(user);
    res.status(200).json({
      success: true,
      message: 'Login Successfull',
      data:{
        user,
        accessToken,
      },

    });
  }catch(error){
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