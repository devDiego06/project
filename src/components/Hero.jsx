import React from 'react'
import { Carousel } from './Carousel'

export const Heroo = () => {
  return (
    <div className="w-full h-2/4 mt-23 relative md:h-1/4">
       <Carousel/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white font-extrabold text-5xl ">Comienza tus viajes ya</h1>
        <p className="text-xl text-white pt-5 pr-0 pb-6 pl-6">Escoge la mejor opcion donde llevar tus cosas</p>
        <a 
        href="" 
        className="size-5 py-2.5 px-5 no-underline border border-black rounded-lg bg-white text-black hover:bg-black hover:text-white hover:border-white"
        >Compra ya!</a>
    </div>


    </div>
  )
}
