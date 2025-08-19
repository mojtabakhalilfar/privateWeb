import React from 'react'

const Button = ({children}:{children:React.ReactNode}) => {
    return (
        <button className='w-[144px] h-[40px] text-black hover:text-white font-bold text-[13px] sm:text-[18px] leading-[10%] border-x-[3px] hover:border-x-white hover:bg-black '>
            {children}
        </button>
    )
}

export default Button
