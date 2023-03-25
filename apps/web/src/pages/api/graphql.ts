import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'

import type { Context } from '@/server/graphql/context'
import { schema } from '@/server/graphql/schema'

import type { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors()

export const createContext = async ({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}): Promise<Context> => {
  const session = { user: { userId: 'dummy-userId' } }
  if (!session) return { user: null }
  const { userId } = session.user
  return { user: { userId } }
}

const apolloServer = new ApolloServer({
  schema: schema,
  context: createContext,
  formatError: (e) => {
    console.log('formatError cause:', e)
    return e.toJSON()
  },
})
const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
  return
})

export const config = {
  api: {
    bodyParser: false,
  },
}
