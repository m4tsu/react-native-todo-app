import { ZodError } from 'zod'

import type { ZodIssue } from 'zod'

export class ValidationError extends ZodError {
  override name = 'ValidationError' as const
  constructor(issues: ZodIssue[]) {
    super(issues)
  }
}

export type ValidationFieldError = { message: string; path: string[] }
