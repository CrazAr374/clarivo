'use client'

import { useState } from 'react'

export const useWaitlist = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const openWaitlist = () => setIsWaitlistOpen(true)
  const closeWaitlist = () => setIsWaitlistOpen(false)

  return {
    isWaitlistOpen,
    openWaitlist,
    closeWaitlist
  }
}