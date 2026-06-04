import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .email('errorMessages.emailInvalid')
    .min(1, 'errorMessages.emailRequired'),
  password: z
    .string()
    .min(8, 'errorMessages.passwordMin')
    .regex(/[A-Z]/, 'errorMessages.passwordUppercase')
    .regex(/[0-9]/, 'errorMessages.passwordNumber'),
});
