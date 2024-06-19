import Image from 'next/image';
import React from 'react';
import ProfileImg from './shared/ProfileImg';
import { GalleryVerticalEnd, Gem, Target } from 'lucide-react';
import { user } from '@/types/User';

const Sidebar = ({ user }: { user: user }) => {

  return (
    <div className="hidden md:block select-none w-[22%] h-fit border border-b-2 bg-white p-2 rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-20 overflow-hidden">
          {
            user && (
              <Image width={1000} height={100} src={'/coding.jpg'} className='object-cover w-full h-full bg-red-200 rounded-lg' alt='main image' />
            )
          }
        </div>
        <div className="my-1 absolute top-10">
          <ProfileImg src={user.img !== undefined ? user.img : "/user.jpg"} />
        </div>
        <div className="border-b border-gray-300 duration-300">
          <div className="mt-10 text-center">
            <div className="w-[40%] m-auto ">
              <h1 className='hover:font-bold font-semibold text-xs md:text-sm sm:text-xs lg:text-base cursor-pointer'>{user ? user.fullName : 'user_name'}</h1>
            </ div>
          </div>
          <div className="w-10/12 mt-1 mb-2 text-xs text-center pt-1 pb-3 break-words m-auto ">
            Full Stack Web Developer | React JS | MongoDB | Express JS | Node JS | Next JS | React Native
          </div>
        </div>
      </div>
      <div className="text-xs w-full mt-1">
        <div className="w-full flex justify-between items-center px-5 py-2 hover:bg-slate-200 cursor-pointer rounded">
          <p>Post Impression</p>
          <p className='text-blue-500'>88</p>
        </div>
        <div className="w-full flex justify-between items-center px-5 py-2 hover:bg-slate-200 cursor-pointer rounded">
          <p>Total Post</p>
          <p className='text-blue-500'>2</p>
        </div>
      </div>

      <div className="flex flex-col p-3 border-t">
        <div className=" text-xs cursor-pointer font-semibold flex flex-col gap-2 p-2 hover:bg-gray-200 rounded-md mb-1">
          <p>Achive Your Career goals</p>
          <div className="flex flex-row items-center gap-1">
            <Gem size={13} strokeWidth={1.5} className='text-cyan-400' />
            <p className='font-semibold border-b border-zinc-500'>Try Premium For ₹0</p>
          </div>
        </div>
        <div className="flex flex-row cursor-pointer text-xs font-semibold hover:bg-slate-200 my-1 rounded-md gap-2 items-center py-4 px-2 border-y">
          <GalleryVerticalEnd size={13} strokeWidth={1.5} />
          <p>Saved Items</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar