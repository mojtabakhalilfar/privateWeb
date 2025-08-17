import Container from '@/component/Container'
import React from 'react'


const FirstPage = () => {
    const socialNetwork = [
        {image:"/assets/vector/github.png" , alt:'گیتهاب' , href:"#"},
        {image:"/assets/vector/linkedin.png" , alt:'لینکدین' , href:"#"},
        {image:"/assets/vector/x.png" , alt:'ایکس' , href:"#"},
    ]


    return (
        <Container id='home' >
            <div className="flex flex-col sm:flex-row-reverse justify-end sm:justify-start h-[696px] bg-black w-full mt-14 sm:mt-18">
                <div className='flex sm:flex-col justify-between sm:justify-center bg-gray-500 w-1/2'>
                    <p className='font-bold text-white sm:text-black flex flex-col py-20 px-12 sm:px-32'>
                        <span className=' text-[20px] sm:text-[40px]'>سلام , من</span>
                        <span className='text-[35px] sm:text-[80px]'>مجتبی خلیل فر</span>
                        <span className='font-extrabold text-[12px] sm:text-[25px] text-[#909090]'> توسعه دهنده Front-end و  طراح UI </span>
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-center px-4'>
                        {
                            socialNetwork.map((items , index)=>(
                                <a key={index} className='w-5 aspect-square mx-1' href={items.href}><img src={items.image} alt={items.alt} /></a>
                            ))
                        } 
                    </div>
                </div>
                <div className='bg-yellow-300 w-1/2 h-full'>
                        <img className='w-full h-full' src="/assets/image/prof.jpg" alt="" />
                </div>
            </div>
            {/* ////// */}
            <div className='flex flex-col items-center text-center text-white bg-black py-10'>
                <span className='font-bold text-[25px] tracking-[18%]'>IT BERRIES</span>
                <p className='sm:text-[20px] leading-[138%] w-[85%] sm:w-[90%] sm:text-center my-12'>{"سلام! من یک برنامه‌نویس و طراح وب هستم با علاقه فراوان به یادگیری چیزهای جدید و حل مسائل پیچیده. چند سالی است که در فرانت‌اند فعالیت می‌کنم و اخیراً به یادگیری بک‌اند پرداخته‌ام. از کارهای گروهی لذت می‌برم و همیشه تلاش می‌کنم با همکاری و خلاقیت پروژه‌های جذاب بسازم. علاوه بر کدنویسی، به طراحی رابط کاربری و تجربه کاربری علاقه دارم و از ابزارهایی مثل فیگما برای پیاده‌سازی ایده‌هایم استفاده می‌کنم."}</p>
                <button className='text-white border-x px-10 py-2 hover:border-black hover:bg-white hover:text-black'>MORE</button>
            </div>
        </Container>
    )
}

export default FirstPage
