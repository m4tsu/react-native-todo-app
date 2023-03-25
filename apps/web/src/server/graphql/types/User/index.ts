import { prisma } from '@packages/db/src/libs/prisma/client'

import { builder } from '../../schema-builder'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.expose('name', { type: 'String', nullable: true }),
    subscriptionPlan: t.exposeString('subscriptionPlan'),
    todos: t.relation('todos'),
  }),
})

// queries
builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: async (query, root, args, ctx) => {
      // throw new GraphQLError('/??', {
      //   extensions: {
      //     code: 'TEST_ERROR',
      //     p: '============================',
      //   },
      // })
      console.log('users query', { ctx })
      return prisma.user.findMany({ ...query })
    },
  })
)

// mutations
builder.mutationField('createUser', (t) =>
  t.prismaField({
    type: 'User',

    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: (query, root, args, ctx, info) => {
      return prisma.user.create({
        data: {
          name: args.name,
        },
      })
    },
  })
)
