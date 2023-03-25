import fs from 'fs'
import path from 'path'

import { lexicographicSortSchema, printSchema } from 'graphql'

import '@/server/graphql/types'
import { builder } from './schema-builder'

export const schema = builder.toSchema({})
const schemaAsString = printSchema(lexicographicSortSchema(schema))

// write the schema to a file.
if (process.env.NODE_ENV !== 'production') {
  fs.writeFileSync(
    path.join(process.cwd(), './src/server/graphql/schema.gql'),
    schemaAsString
  )
}
