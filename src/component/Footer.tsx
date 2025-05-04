import React from 'react'

interface IConnectin {
    id: number,
    image: string,
    link: string
}

const Footer = () => {

    const connectin: IConnectin[] = [
        { id: 1 , image: "/assets/image/facebook.svg", link: "" },
        { id: 2 , image: "/assets/image/gmail.svg", link: "" },
        { id: 3 , image: "/assets/image/instagram.svg", link: "" },
        { id: 4 , image: "/assets/image/linkedin.svg", link: "" },
    ]

    return (
        <div className='flex items-center justify-center w-full bg-black py-20 sm:py-32'>
            <div className='flex flex-col items-center justify-center w-[80%]'>
                <div className='text-white'>
                    <a href='#header'>BACK TO TOP</a>
                </div>
                <div className='flex items-center justify-around w-[60%] sm:w-1/5 my-4'>
                {
                    connectin.map((items)=>(
                        <a href={items.link}>
                            <img className='w-[30px] aspect-square' src={items.image} alt="" />
                        </a>
                    ))
                }
                </div>
                <div className=''><p className='text-[18px] text-center text-white'>@2020 Tomasz Gajda All Rights Reserved.</p></div>
            </div>
        </div>
    )
}

export default Footer
