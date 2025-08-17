import Headline from '@/component/Headline'
import React from 'react'


// interface ISkiils{

//       title : string ,
//       image : string
// }


const Skills = () => {
  const skills = {
    USINGNOW: [
      { title: "HTML", image: "/assets/image/HTML.svg" },
      { title: "CSS", image: "/assets/image/CSS.svg" },
      // { title: "SASS", image: "/assets/image/SASS.svg" },
      { title: "JAVASCRIPT", image: "/assets/image/JAVASCRIPT.svg" },
      { title: "REACT", image: "/assets/image/REACT.svg" },
      // { title: "BOOTSTRAP", image: "/assets/image/bootstrap.svg" },
      { title: "GIT", image: "/assets/image/git.svg" },
      { title: "FIGMA", image: "/assets/image/figma.svg" },
      { title: "TYPESCRIPT", image: "/assets/image/TYPESCRIPT.png" },
      { title: "MYSQL", image: "/assets/image/MYSQL.svg" },
      { title: "MONGODB", image: "/assets/image/MONGODB.png" },
    ],
    LEARNING: [
      { title: "NODEJS", image: "/assets/image/NODEJS.png" },
    ],
    OTHERSKILLS: [
      { title: "C++", image: "/assets/image/C++.svg" },
      { title: "C", image: "/assets/image/C.svg" },
    ],
  }
  return (
    <div id='skills' className='flex items-center justify-center py-10'>
      <div className='flex flex-col items-center justify-center'>
        <Headline headline='مهارت ها' />
        <div className='flex flex-col items-center py-16'>
          <ShowSkill data={skills.USINGNOW} title='درحال استفاده' />
          <ShowSkill data={skills.LEARNING} title='درحال یادگیری' />
          <ShowSkill data={skills.OTHERSKILLS} title='مهارت های دیگر' />
        </div>
      </div>

    </div>
  )
}

export default Skills



const ShowSkill = ({title , data}:{title:string , data : Array<{title : string , image : string}>}) => {
  return (
    <div className='flex flex-col items-center py-10 w-full'>
      <span className='font-bold text-[30px] leading-[18%] text-black mb-16'>{title} :</span>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-10 overflow-y-auto max-h-[340px] w-full mt-2'>
        {
          data.map((items , index) => (
            <div key={index} className='flex flex-col items-center'>
              <img className='w-[84px] h-[100px] mb-4' src={items.image} alt={items.title} />
              <span className='text-[24px] text-black'>{items.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}