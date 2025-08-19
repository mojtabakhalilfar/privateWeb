"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from '@/component/Button'
import Headline from '@/component/Headline'
import Sepaeator from '@/component/Sepaeator'
import React from 'react'

const Contactme = () => {
    const formRef = useRef<HTMLFormElement>(null);

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
        <p className='font-light text-[15px] sm:text-[18px] w-[80%] text-center my-6'>من مجتبی خلیل فر هستم، فارغ‌التحصیل مهندسی کامپیوتر، با چند سال تجربه فرانت‌اند و در حال توسعه مهارت‌های بک‌اند، علاقه‌مند به یادگیری فناوری‌های جدید و حل مسائل پیچیده. </p>
        <Sepaeator/>
        <div className='flex flex-col items-center py-8 w-full'>
          <form className='w-[80%] flex flex-col items-center' ref={formRef} onSubmit={handleSubmit}>
            <Input type='text' title='نام'/>
            <br />
            <Input type='email' title='ایمیل'/>
            <Input type='number' title='شماره تلفن'/>
            <textarea className='border-b-5 border-l-5 border-black w-full mb-10' placeholder='پیام شما' id=""></textarea>
            <Button >ارسال</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactme


const Input=({title , type}:{title:string , type:string})=>{
  return <input className='border-b-5 border-l-5 border-black w-full mb-10 px-3' type={type} placeholder={`${title} خود را وارد کنید `} />
}