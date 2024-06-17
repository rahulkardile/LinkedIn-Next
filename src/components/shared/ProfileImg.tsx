import Image from 'next/image'
import React from 'react'

const ProfileImg = ({ src }: { src: string }) => {
    return (
        <Image src={src} width={1000} height={1000} alt="avatar" className='w-16 h-16 rounded-full p-[0.20rem] border border-zinc-300 bg-white' />
    )
}

export default ProfileImg;