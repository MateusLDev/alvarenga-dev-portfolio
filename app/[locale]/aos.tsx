'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export const AOSInit = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000
    })
  }, [])

  return null
}
