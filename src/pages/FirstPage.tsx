import Container from '@/component/Container'
import React from 'react'

const FirstPage = () => {

    return (
        <Container id='home' >
            <div className="flex flex-col sm:flex-row justify-end sm:justify-start h-[696px] bg-black w-full mt-18">
                <div className='flex sm:flex-col justify-between sm:justify-center bg-red-400'>
                    <p className='font-bold text-white sm:text-black flex flex-col py-20 px-12 sm:px-32'>
                        <span className=' text-[20px] sm:text-[40px]'>Hi, I am</span>
                        <span className='text-[35px] sm:text-[80px]'>Tomasz Gajda</span>
                        <span className='font-extrabold text-[12px] sm:text-[25px] text-[#909090]'>Front-end Developer / UI Designer</span>
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-center px-4'>
                        <a className='w-5 aspect-square bg-red-500' href="#"></a>
                        <a className='w-5 aspect-square bg-red-500 my-4 sm:mx-4' href="#"></a>
                        <a className='w-5 aspect-square bg-red-500' href="#"></a>
                    </div>
                </div>
            </div>
            {/* ////// */}
            <div className='flex flex-col items-center text-center text-white bg-black py-10'>
                <span className='font-bold text-[25px] tracking-[18%]'>IT BERRIES</span>
                <p className='sm:text-[15px] leading-[138%] w-[85%] sm:w-[90%] sm:pr-[10%] sm:text-left my-12'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
                <button className='text-white border-x px-10'>MORE</button>
            </div>
        </Container>
    )
}

export default FirstPage
