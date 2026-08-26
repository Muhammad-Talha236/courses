import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(
      /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      'Name can contain only alphabets and single spaces'
    ),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Invalid email address')
    .max(255, 'Email must not exceed 255 characters')
    .regex(
      /^[A-Za-z][A-Za-z0-9._%+-]*@/,
      'Email must start with an alphabet'
    ),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(72, 'Password must not exceed 72 characters')
    .regex(
      /[A-Z]/,
      'Password must contain at least one uppercase letter'
    )
    .regex(
      /[a-z]/,
      'Password must contain at least one lowercase letter'
    )
    .regex(
      /[0-9]/,
      'Password must contain at least one number'
    )
    .regex(
      /[^A-Za-z0-9\s]/,
      'Password must contain at least one special character'
    )
    .refine(
      (value) => !/\s/.test(value),
      'Password must not contain spaces'
    ),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Invalid email address')
    .max(255, 'Email must not exceed 255 characters')
    .regex(
      /^[A-Za-z][A-Za-z0-9._%+-]*@/,
      'Email must start with an alphabet'
    ),

  password: z
    .string()
    .min(1, 'Password is required')
    .max(72, 'Password must not exceed 72 characters'),
});