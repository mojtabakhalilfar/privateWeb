import Container from '@/component/Container'
import React from 'react'


const FirstPage = () => {
    const socialNetwork = [
        { image: "/assets/vector/github.png", alt: 'گیتهاب', href: "#" },
        { image: "/assets/vector/linkedin.png", alt: 'لینکدین', href: "#" },
        { image: "/assets/vector/x.png", alt: 'ایکس', href: "#" },
    ]


    return (
        <Container id='home' >
            <div style={{ backgroundImage: "url(/assets/image/prof.jpg)" }} className="h-[696px] w-full mt-14 sm:mt-18 flex flex-col-reverse sm:flex-row-reverse justify-start items-start bg-black">
                <div className='flex items-center justify-center [clip-path:polygon(0_20%,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] bg-[#909090] sm:bg-[#D7D7D7] w-full h-1/3 sm:w-1/2 sm:h-full'>
                    <div className='flex flex-row-reverse items-center justify-evenly w-full sm:flex-col sm:justify-center sm:items-end h-full'>
                        <p className='font-bold text-white sm:text-black flex flex-col py-20 px-12 sm:px-32'>
                            <span className='text-[20px] sm:text-[40px]'>سلام , من</span>
                            <span className='text-[35px] sm:text-[70px]'>مجتبی خلیل فر</span>
                            <span className='font-extrabold text-[12px] sm:text-[25px] text-[#fff] sm:text-[#909090]'> توسعه دهنده Front-end و  طراح UI </span>
                        </p>
                        <div className='flex flex-col justify-around sm:flex-row sm:items-center sm:justify-start px-4 h-full sm:h-3/12 sm:w-4/5 py-12'>
                            {
                                socialNetwork.map((items, index) => (
                                    <a key={index} className='w-5 sm:w-14 aspect-square mx-1 bg-[#C4C4C4] flex items-center justify-center shadow-2xl' href={items.href}><img src={items.image} alt={items.alt} /></a>
                                ))
                            }
                        </div>
                    </div>
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
