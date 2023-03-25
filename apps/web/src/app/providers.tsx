'use client'

import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const AppProviders: FC<Props> = ({ children }) => {
  return <>{children}</>
}
