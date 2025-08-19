import React from 'react'

const Button = ({children}:{children:React.ReactNode}) => {
    return (
        <button className='w-[144px] h-[40px] text-black font-bold text-[13px] sm:text-[18px] leading-[10%] border-x-[3px] '>
            {children}
        </button>
    )
}

export default Button
