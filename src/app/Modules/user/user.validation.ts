import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({}).optional(),
    password: z.string({ required_error: 'Password is required' }),
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    image: z.string({}).optional(),
    number: z.string({ required_error: 'Contact number is required' }),
    address: z.string({}).optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
