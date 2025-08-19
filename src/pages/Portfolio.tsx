import Headline from '@/component/Headline'
import React from 'react'

const Portfolio = () => {
  const portfolio = [
    { title: "فروشگاه خواربار فروشی", image: "/assets/portifolio/sanjab.jpg", technology: ["html", "css", "javaScript", "react", "redux tolkit"], link: "", source: "" },
    { title: "کافی شاپ", image: "/assets/portifolio/coffeshop.jpg", technology: ["html", "tailwind css", "typeSript", "next"], link: "", source: "" },
    { title: "", image: "/assets/portifolio/coffeshop.jpg", technology: [], link: "", source: "" },
  ]
  return (
    <div id='portfolio' className='flex items-center justify-center py-10'>
      <div className='flex flex-col items-center justify-center'>
        <div >
          <Headline headline='نمونه کار' />
        </div>
        <div className='flex flex-col items-center sm:grid grid-cols-3 gap-3 py-8'>
          {
            portfolio.map((item, index) => (
              <div className='w-[20rem] sm:w-[25rem] aspect-square border rounded-2xl flex flex-col items-center justify-center relative' key={index}>
                <div style={{ backgroundImage: `url(${item.image})` }} className='bg-cover bg-center bg-no-repeat absolute inset-0 blur-md hover:blur-[2px]'></div>
                <div className='flex flex-col items-center justify-evenly w-full h-1/2 z-10'>
                  <h1 className='text-[20px] text-center h-1/4 w-auto'>{item.title}</h1>
                  <div className='flex flex-row-reverse justify-evenly w-full px-4 h-1/4'>
                    {item.technology.map((item , index) => (
                      <span key={index} className='text-[15px] mx-1'>{item}</span>
                    ))}
                  </div>
                  <div className='w-full h-/5 flex justify-around h-1/4'>
                    <button className='bg-yellow-300 border border-yellow-400 hover:bg-yellow-400 w-1/3 rounded-[15px] p-2 hover:text-white'>
                      <a target='_blank' href={item.link}>لینک انلاین</a>
                    </button>
                    <button className='bg-yellow-300 border border-yellow-400 hover:bg-yellow-400 w-1/3 rounded-[15px] p-2 hover:text-white'>
                      <a target='_blank' href={item.source}>لینک کد</a>
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
