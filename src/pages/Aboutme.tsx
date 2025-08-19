
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
    { id: 1, title: "توسعه فرانت اند", describtion: "تجربه کار با HTML، CSS، JavaScript و فریم‌ورک‌هایی مثل React و Next.js را دارم. همیشه سعی می‌کنم کد تمیز و بهینه بنویسم و رابط‌های کاربری روان و زیبا بسازم." },
    { id: 2, title: "توسعه بک اند", describtion: "به تازگی شروع به یادگیری بک‌اند با Node.js کرده‌ام و با Express.js و ساخت API آشنا هستم. هدفم این است که یک توسعه‌دهنده فول‌استک شوم." },
    { id: 3, title: "طراحی UI/UX", describtion: "برای طراحی رابط کاربری از فیگما استفاده می‌کنم و تلاش می‌کنم طرح‌هایم علاوه بر زیبایی، تجربه کاربری خوبی هم داشته باشند." }
  ]


  return (
    <div id='aboutme' className='flex items-center justify-center py-10'>
      <div className='w-[80%] sm:[60%] flex flex-col items-center'>
        <Headline headline='درباره من' />
        <p className='font-light text-xs sm:text-[25px] text-center text-black my-10'>
          <br className='my-1' />
          <span>{"من یک برنامه‌نویس و طراح وب هستم که فارغ‌التحصیل مهندسی کامپیوترم. چند سالی است که در زمینه فرانت‌اند فعالیت می‌کنم و اخیراً به یادگیری بک‌اند روی آورده‌ام. به طراحی رابط کاربری و تجربه کاربری نیز علاقه‌مندم و از فیگما برای پیاده‌سازی ایده‌هایم استفاده می‌کنم. با وجود اینکه هنوز در جایی استخدام نشده‌ام، همیشه در حال یادگیری و توسعه مهارت‌های خود هستم."}</span>
        </p>
        <Button>EXPLORE</Button>
        <Sepaeator />
        <div className='sm:grid sm:grid-cols-2 sm:bg-center'>
          {
            abiltis.map((items, index) => (
              <div key={index} className='flex flex-col items-start justify-around text-black py-10 sm:px-12'>
                <span className='font-bold text-[18px] leading-[18%] pb-4'>{items.title}</span>
                <p className='font-light text-[13px] sm:text-[18px]'>{items.describtion}</p>
              </div>
            ))
          }
        </div>
        <Sepaeator />
      </div>
    </div>
  )
}

export default Aboutme
