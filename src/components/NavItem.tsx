import { NavItemType } from '@/types/NavItemsType';
import { Bell, BriefcaseBusiness, Home, MessageCircleMore, User } from 'lucide-react'
import Link from 'next/link';
import React from 'react';

const NavItems: NavItemType[] = [
    {
        src: "/home",
        icon: <Home />,
        text: "Home",
    },
    {
        src: "/networks",
        icon: <User />,
        text: "My Network",
    },
    {
        src: "/job",
        icon: <BriefcaseBusiness />,
        text: "Jobs",
    },
    {
        src: "/message",
        icon: <MessageCircleMore />,
        text: "Home",
    },
    {
        src: "/notification",
        icon: <Bell />,
        text: "Notification",
    },
]

const NavItem = () => {
  return (
    <div className='flex gap-8'>
        {
            NavItems.map((item, index)=>(
                <div key={index} className="flex flex-col items-center cursor-pointer text-gray-500 hover:text-black">
                    <span>{item.icon}</span>
                    <Link className='text-xs' href={item.src}>{item.text}</Link>
                </div>
            ) )
        }
    </div>
  )
}

export default NavItem