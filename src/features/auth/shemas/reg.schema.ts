import { z } from 'zod';

export const regSchema = z
  .object({
    name: z
      .string()
      .min(2, 'errorMessages.nameMin')
      .min(1, 'errorMessages.nameRequired'),
    role: z.enum(['parent', 'kid']),
    email: z.email('errorMessages.emailInvalid'),
    password: z
      .string()
      .min(1, 'errorMessages.passwordRequired')
      .min(8, 'errorMessages.passwordMin')
      .regex(/[A-Z]/, 'errorMessages.passwordUppercase')
      .regex(/[0-9]/, 'errorMessages.passwordNumber'),
    confirmPassword: z.string().min(1, 'errorMessages.confirmPasswordRequired'),
    terms: z.boolean().refine((value) => value === true, {
      message: 'errorMessages.termsRequired',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'errorMessages.passwordsDoNotMatch',
    path: ['confirmPassword'],
  });
