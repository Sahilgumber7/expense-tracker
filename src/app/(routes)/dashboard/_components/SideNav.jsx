"use client" 

import { ChartBar, GaugeCircle, LayoutDashboard, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react'

function SideNav() {

    const menuList = [
        {
            id:1,
            name:'Dashboard',
            icon:LayoutDashboard,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Analytics',
            icon:ChartBar ,
            path:'/dashboard/analytics'
        },
        {
            id:3,
            name:'Budgets',
            icon:Wallet ,
            path:'/dashboard/budget'
        },
        {
            id:4,
            name:'Settings',
            icon:GaugeCircle ,
            path:'/dashboard/settings'
        },

    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    } , [path])


  return (

    <div className='h-screen p-5 border border-gray-100 shadow-md'>
      <Image src="/logo.svg" alt="logo" width={80} height={80} />
      <div className='mt-5'>
        {menuList.map((menu, index) => (
            <Link key={index} href={menu.path}>
            <h2 key={menu.id} className= {`flex items-center gap-2 mb-2 font-medium p-5 cursor-pointer rounded-md hover:text-black/80 hover:bg-black/10 ${ path==menu.path && ' text-black/80 bg-black/10 '}`} >
                <menu.icon />
                {menu.name}
            </h2>
            </Link>
))}

      </div>
    </div>
  )
}

export default SideNav
