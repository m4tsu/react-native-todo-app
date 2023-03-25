/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable unused-imports/no-unused-imports-ts */

import type { DeepNoNullable } from '@packages/util/types/DeepNoNullable'
import type { User as PrismaUser } from '@prisma/client'
import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      userId: PrismaUser['id']
    } & DeepNoNullable<DefaultSession['user']>
  }

  interface User extends PrismaUser {}
}
