import type { User } from '@packages/db/src/generated/prisma'

export type Context = {
  user: {
    userId: User['id']
  } | null
}
