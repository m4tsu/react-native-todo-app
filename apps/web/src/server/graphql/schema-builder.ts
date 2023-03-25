import { prisma } from '@packages/db/src/libs/prisma/client'
import SchemaBuilder from '@pothos/core'
import ErrorsPlugin from '@pothos/plugin-errors'
import PrismaPlugin from '@pothos/plugin-prisma'
import ScopeAuthPlugin, {
  AuthScopeFailureType,
} from '@pothos/plugin-scope-auth'
import ValidationPlugin from '@pothos/plugin-validation'
import { DateResolver } from 'graphql-scalars'

import type { Context } from '@/server/graphql/context'
import { ValidationError } from '@/server/graphql/utils/validation'

// import { AdminAuthorizationError, AuthenticationError } from './errors'

import type PrismaTypes from '@packages/db/src/generated/pothos/types'
import type { RequireProperty } from '@packages/utils/types/RequireProperty'
import type { AuthFailure } from '@pothos/plugin-scope-auth'

const throwAuthScopeError = (failure: AuthFailure) => {
  if (failure.kind === AuthScopeFailureType.AuthScope) {
    switch (failure.scope) {
      // case 'isAdmin':
      //   throw new AdminAuthorizationError()
      case 'loggedIn':
        throw new Error('plz login')
    }
  }
  if ('error' in failure && failure.error) {
    throw failure.error
  }
  if (
    failure.kind === AuthScopeFailureType.AnyAuthScopes ||
    failure.kind === AuthScopeFailureType.AllAuthScopes
  ) {
    for (const child of failure.failures) {
      throwAuthScopeError(child)
    }
  }
}

// https://pothos-graphql.dev/docs/plugins/prisma

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date }
  }
  PrismaTypes: PrismaTypes
  AuthScopes: {
    loggedIn: boolean
    // isAdmin: boolean
  }
  AuthContexts: {
    loggedIn: RequireProperty<Context, 'user'>
    // isAdmin: RequireProperty<Context, 'user'>
  }
  Context: Context
}>({
  plugins: [ErrorsPlugin, ValidationPlugin, PrismaPlugin, ScopeAuthPlugin],
  prisma: {
    client: prisma,
    filterConnectionTotalCount: true,
  },
  authScopes: async (ctx) => {
    return { loggedIn: ctx.user !== null }
  },
  scopeAuthOptions: {
    treatErrorsAsUnauthorized: true,
    unauthorizedError: (_parent, _ctx, _info, result) => {
      throwAuthScopeError(result.failure)
      return new Error('unauthorized error')
    },
  },
  errorOptions: {
    // defaultTypes: [Error],
  },
  validationOptions: {
    validationError: (e, args, ctx, info) => {
      console.log('validationError', { e, args, ctx, info })
      return new ValidationError(e.issues)
    },
  },
})

builder.addScalarType('Date', DateResolver, {})
builder.queryType({})
builder.mutationType()
