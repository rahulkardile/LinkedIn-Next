import Image from 'next/image';
import React from 'react';
import ProfileImg from './shared/ProfileImg';


interface user {
  img: string | undefined;
  name: string | undefined | null,
  last: string | undefined | null,
  fullName: string | undefined | null,
}

const Sidebar = ({ user }: { user: user }) => {

  return (
    <div className="hidden md:block w-[28%] h-fit border border-b-2 bg-white p-2 rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-20 overflow-hidden">
          {
            user && (
              <Image width={1000} height={80} src={'/coding.jpg'} className='object-contain bg-red-200 rounded-lg' alt='main image' />
            )
          }
        </div>
        <div className="my-1 absolute top-14">
          <ProfileImg src={user.img !== undefined ? user.img : "/mern1.png"} />
        </div>
        <div className="border-b border-b-gray-300">
          <div className="p-2 mt-8 text-center">
            <h1 className='font-semibold hover:underline cursor-pointer'>{user ? user.fullName : 'user_name'}</h1>
            <p className='lowercase'>@{user.name ? user.name+user.last+'1' : ''}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar