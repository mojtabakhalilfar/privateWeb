"use client"
import { useState } from "react"

interface INavigation {
  title: string,
  href: string
}

const Header = () => {
  const [showNavbar, seTShowNavbar] = useState<boolean>(false)
  const Navigation: INavigation[] = [

    {
      "title": "ارتباط با من",
      "href": "#contactme"
    },
    {
      "title": "نمونه کار",
      "href": "#portfolio"
    },
    {
      "title": "مهارت ها",
      "href": "#skills"
    },
    {
      "title": "درباره من",
      "href": "#aboutme"
    },
    {
      "title": "خانه",
      "href": "#home"
    },
  ]


  return (
    <div className="bg-black w-full h-16 sm:h-auto fixed top-0 left-0 z-20 flex flex-row">
      <div className=" w-full sm:w-[60%] h-full sm:h-auto sm:rounded-[30px] relative ">
        <button onClick={() => seTShowNavbar(!showNavbar)} className={`flex sm:hidden bg-red-400 aspect-square w-10 absolute top-[25%] right-7`}></button>
        <ul className={`${showNavbar ? "flex" : "hidden"} flex-col-reverse sm:flex sm:flex-row-reverse items-center sm:justify-around mt-16 sm:mt-2 backdrop-opacity-40 bg-black`}>
          {Navigation.map((e) => (
            <li key={e.title} className="w-full sm:w-[147px] py-4 text-white hover:bg-white hover:text-black sm:rounded-[30px] flex items-center justify-center my-1"><a href={e.href}>{e.title}</a></li>
          ))}
        </ul>
      </div>
      <div className="sm:w-[40%] h-1">

      </div>
    </div>
  )
}

export default Header
