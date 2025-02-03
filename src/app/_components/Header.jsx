import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className=' p-5 flex justify-between items-center shadow-lg border'>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <a href =' dashboard'>
      <Button >Get Started</Button>
      </a>
    </div>
  )
}

export default Header
