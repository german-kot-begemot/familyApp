import type z from 'zod';
import type { loginSchema } from './shemas/login.schema';
import type { regSchema } from './shemas/reg.schema';

export type LoginFormValues = z.infer<typeof loginSchema>;

export type RegisterFormValues = z.infer<typeof regSchema>;
