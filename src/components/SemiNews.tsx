import React from 'react'

const SemiNews = () => {
    return (
        <div className="flex flex-col gap-1 my-2">
            <p className='font-semibold cursor-pointer line-clamp-1 text-sm'>Foreign firms make India foray</p>
            <div className="flex gap-2 text-xs px-1">
                <span>5h ago</span>
                <span>2143 readers</span>
            </div>
        </div>
    )
}

export default SemiNews