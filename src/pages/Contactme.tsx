"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from '@/component/Button'
import Headline from '@/component/Headline'
import Sepaeator from '@/component/Sepaeator'
import React from 'react'

const Contactme = () => {
  const formRef = useRef<HTMLFormElement>(null);
const text ="خوشحال می‌شوم اگر برای پروژه‌ای همکاری داشته باشیم یا فرصتی برای تجربه‌ی مشترک فراهم شود. چه بخواهید درباره‌ی کار من بیشتر بدانید، چه پیشنهادی برای همکاری داشته باشید، می‌توانید از طریق این فرم با من در تماس باشید. پاسخ شما برای من ارزشمند است."
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "service_w2lozt5",
      "template_yg3995f",
      formRef.current,
      "8-lDa4__uuR_p7gC1"
    ).then(
      () => alert("پیام با موفقیت ارسال شد!"),
      (err) => alert("خطا در ارسال پیام: " + err.text)
    );
  };
  return (
    <div id='contactme' className='h-[100vh]'>
      <div className='flex flex-col items-center justify-center'>
        <Headline headline='ارتباط با من' />
        <p className='font-light text-[15px] sm:text-[18px] w-[80%] text-center my-6'>{text}</p>
        <Sepaeator />
        <div className='flex flex-col items-center py-8 w-full'>
          <form className='w-[80%] flex flex-col items-center' ref={formRef} onSubmit={handleSubmit}>
            <Input type='text' title='نام' name="name"/>
            <br />
            <Input type='email' title='ایمیل' name="email"/>
            <Input type='number' title='شماره تلفن' name="phone"/>
            <textarea className='border-b-5 border-l-5 border-black w-full mb-10' placeholder='پیام شما' id="" name="message"></textarea>
            <Button >ارسال</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactme


const Input = ({ title, type , name }: { title: string, type: string , name:string }) => {
  return <input className='border-b-5 border-l-5 border-black w-full mb-10 px-3' type={type} name={name} placeholder={`${title} خود را وارد کنید `} />
}