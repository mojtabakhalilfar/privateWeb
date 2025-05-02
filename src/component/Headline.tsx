import React from 'react'

const Headline = ({ headline }: { headline: string }) => {
  return (
    <div className='w-[210px] h-[68px] border-[8px] border-black flex items-center justify-center'>
      <span className='font-bold leading-[127%] tracking-[43%] text-black '>{headline}</span>
    </div>
  )
}

export default Headline
