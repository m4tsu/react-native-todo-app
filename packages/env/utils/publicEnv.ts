import { generateEnv } from './generateEnv'

type PublicEnvKey = `NEXT_PUBLIC_${string}`

const publicEnvKeys = [
  'NEXT_PUBLIC_HOGE_KEY',
] as const satisfies readonly PublicEnvKey[]

export const publicEnv = generateEnv(publicEnvKeys)
