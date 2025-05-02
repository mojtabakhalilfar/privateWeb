
import Button from '@/component/Button'
import Headline from '@/component/Headline'
import Sepaeator from '@/component/Sepaeator'
import React from 'react'

interface IAbility {
  id: number,
  title: string,
  describtion: string
}

const Aboutme = () => {
  const abiltis: IAbility[] = [
    { id: 1, title: "DESIGN", describtion: "I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work." },
    { id: 2, title: "DEVELOPMENT", describtion: "Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive." },
    { id: 3, title: "MAINTENANCE", describtion: "In case of any problems or the need for changes, I can introduce new functionalities and solutions." }
  ]
  return (
    <div id='aboutme' className='flex items-center justify-center py-10'>
      <div className='w-[80%] sm:[60%] flex flex-col items-center'>
        <Headline headline='ABOUT ME' />
        <p className='font-light text-xs text-black my-10'>
          <span>My name is Tomasz Gajda, I'm a third year Applied Computer Science student at the AGH University of Science and Technology in Krakow. I have been learning Front-End technologies for a year and this time was just enough for me to make sure that this is my place in the industry.
          </span>
          <br className='my-1' />
          <span>Membership in the science club developed my design skills, which quickly turned into a new hobby. I am fluent in English (spoken and written) and intermediate Spanish. Apart from designing and programming websites, my passion is all kinds of motorsport - from rallies to the very king of motorsport - formula 1.</span>
        </p>
        <Button>EXPLORE</Button>
        <Sepaeator/>
        <div className='sm:grid sm:grid-cols-2 sm:bg-center'>
          {
            abiltis.map((items) => (
              <div className='flex flex-col items-start justify-around text-black py-10 sm:px-12'>
                <span className='font-bold text-[17px] leading-[18%] pb-4'>{items.title}</span>
                <p className='font-light text-[13px]'>{items.describtion}</p>
              </div>
            ))
          }
        </div>
        <Sepaeator/>
      </div>
    </div>
  )
}

export default Aboutme
