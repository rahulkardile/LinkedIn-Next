import React from 'react'

const Games = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-1">
                <img src="climb.svg" className='w-7 h-7' alt="logo" />
                <div className="flex flex-col p-1">
                    <div className="flex gap-1 font-semibold">
                        <span className='text-xs '>Cross Climb</span>
                        <span className='text-xs'>#43</span>
                    </div>
                    <span className='text-xs'>Unlock a trivia ladder</span>
                </div>
            </div>

            <div className="flex flex-row items-center gap-1">
                <img src="queen.svg" className='w-7 h-7' alt="logo" />
                <div className="flex flex-col p-1">
                    <div className="flex gap-1 font-semibold">
                        <span className='text-xs '>Queens Game</span>
                        <span className='text-xs'>#42</span>
                    </div>
                    <span className='text-xs'>Crown each region</span>
                </div>
            </div>

            <div className="flex flex-row items-center gap-1">
                <img src="pinpoint.svg" className='w-7 h-7' alt="logo" />
                <div className="flex flex-col p-1">
                    <div className="flex gap-1 font-semibold">
                        <span className='text-xs '>Pin Point</span>
                        <span className='text-xs'>#41</span>
                    </div>
                    <span className='text-xs'>Guess the category</span>
                </div>
            </div>

        </div>
    )
}

export default Games