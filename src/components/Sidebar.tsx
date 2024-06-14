import Image from 'next/image';
import React from 'react';
import ProfileImg from './shared/ProfileImg';


interface user {
  img: string | undefined;
  name: string | undefined | null,
}

const Sidebar = ({user}: {user: user}) => {

  return (
    <div className="hidden md:block w-[28%] h-fit border border-b-2 bg-white p-2 rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-20 overflow-hidden">
          {
            user && (
              <Image width={1000} height={80} src={'/mern1.png'} className='object-contain' alt='main image' />
            )
          }
        </div>
        <div className="my-1 absolute top-14">
          <ProfileImg src={user.name ? user.img : "/mern1.png"} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar