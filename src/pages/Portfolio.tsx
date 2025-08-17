import Headline from '@/component/Headline'
import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  const portfolio = [
    {title:"" , image:"" , link:"" , source:""}
  ]
  return (
    <div id='portfolio' className='flex items-center justify-center py-10'>
      <div className='flex flex-col items-center justify-center'>
        <div >
          <Headline headline='نمونه کار' />
        </div>
        <div className='flex flex-col items-center sm:grid grid-cols-3 gap-0 py-8'>
          {
            [1, 2, 3, 4, 5, 6].map((item) => (
              <Link key={item} href={"#"}>
                <img className='w-[382px] h-[209px]' src="" alt="" />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
