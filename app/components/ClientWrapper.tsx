'use client'

import SpaceBackground from './SpaceBackground'

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SpaceBackground />
      {children}
    </>
  )
} 