import React from 'react'

const Container = ({children , id}:{children:React.ReactNode , id:string}) => {
   console.log(id)
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {children}
    </div>
  )
}

export default Container
