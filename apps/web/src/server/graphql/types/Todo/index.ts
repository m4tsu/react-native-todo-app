import { builder } from '../../schema-builder'

builder.prismaObject('Todo', {
  fields: (t) => ({
    id: t.exposeID('id'),
    user: t.relation('user'),
    title: t.exposeString('title'),
    description: t.exposeString('description'),
    published: t.boolean({ resolve: (post) => post.published ?? false }),
    createdAt: t.expose('createdAt', { type: 'Date' }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
  }),
})
