import { generateEnv } from '../utils/generateEnv'

export const dbEnv = generateEnv(['DATABASE_URL'] as const)
