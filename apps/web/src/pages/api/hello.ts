// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@packages/db/src/libs/prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const a = await prisma.session.findUnique({ where: { id: '???' } })
  console.log(a)
  res.status(200).json({ name: 'John Doe' })
}
