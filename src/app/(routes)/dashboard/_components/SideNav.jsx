import { ChartBar, GaugeCircle, LayoutDashboard, Wallet } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {

    const menuList = [
        {
            id:1,
            name:'Dashboard',
            icon:LayoutDashboard
        },
        {
            id:2,
            name:'Analytics',
            icon:ChartBar
        },
        {
            id:3,
            name:'Savings',
            icon:Wallet
        },
        {
            id:4,
            name:'Settings',
            icon:GaugeCircle
        },

    ]
  return (

    <div className='h-screen p-5 border border-gray-100 shadow-md'>
      <Image src="/logo.svg" alt="logo" width={80} height={80} />
      <div className='mt-5'>
        {menuList.map((menu, index) => (
            <h2 className='flex items-center gap-2  font-medium p-5 cursor-pointer rounded-md hover:text-blue-800 hover:bg-blue-100' key={index}>
                <menu.icon />
                {menu.name}
            </h2>
))}

      </div>
    </div>
  )
}

export default SideNav
