import { generateEnv } from '../utils/generateEnv'

const serverEnvKeys = [
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
] as const satisfies readonly string[]

export const serverEnv = generateEnv(serverEnvKeys)
