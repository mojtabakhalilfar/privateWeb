import Button from '@/component/Button'
import Headline from '@/component/Headline'
import Sepaeator from '@/component/Sepaeator'
import React from 'react'

const Contactme = () => {
  return (
    <div id='contactme' className='h-[100vh]'>

      <div className='flex flex-col items-center justify-center'>

        <Headline headline='Contactme' />
        <p className='font-light text-[15px] w-[80%] text-center my-6'>My name is Tomasz Gajda, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. </p>
        <Sepaeator/>
        <div className='flex flex-col items-center py-8 w-full'>
          <form className='w-[80%] flex flex-col items-center' action="">
            <Input type='text' title='NAME'/>
            <br />
            <Input type='email' title='EMAIL'/>
            <Input type='number' title='PHONE NUMBER'/>
            <textarea className='border-b-5 border-l-5 border-black w-full mb-10' placeholder='YOUR MESSAGE*' id=""></textarea>
            <Button >SUBMIT</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactme


const Input=({title , type}:{title:string , type:string})=>{
  return <input className='border-b-5 border-l-5 border-black w-full mb-10 px-3' type={type} placeholder={`ENTER YOUR ${title}`} />
}