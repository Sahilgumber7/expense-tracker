import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className=' p-5 flex justify-between items-center shadow-lg border'>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <Button >Get Started</Button>
    </div>
  )
}

export default Header
