import { z } from 'zod'

const email = z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email' })
const password = z
  .string({ required_error: 'Password is required' })
  .min(3, { message: 'Password must be at least 3 characters' })
const rememberMe = z.boolean().default(false).optional()

const loginSchema = z.object({ email, password, rememberMe })

export type LoginFormValues = z.infer<typeof loginSchema>
