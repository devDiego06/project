import { Accordion } from '@nextui-org/accordion'
import React from 'react'
import { Accordionn } from './Accordion'

export const Body = () => {
  return (
    
     
    <div id="right" className=" mx-16 my-24">     
        <div className="justify-between items-center mt-16">
            <div id="decoration-text" className="">
            <h1 className="text-6xl font-bold mb-20 text-center">Informacion Relevante</h1>
            <p className="text-2xl text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, numquam minima suscipit aut tenetur porro facere eos ab doloremque pariatur asperiores corporis cupiditate error consequatur ad quaerat accusantium quasi neque.</p>
            </div>
        <div className="flex my-12 w-full">
            <div id="left" className="">
            <img 
                src="../src/assets/img2.jpg"
                alt="" 
                className=" object-cover rounded-2xl w-4/5 p-1 transform translate-y-8"
             />
             </div>

            <div id="right" className="">
             <img 
                src="../src/assets/img4.jpg"
                alt="" 
                className="  object-cover rounded-2xl w-full"
             />
            </div>
         </div>      
            <div className="flex">
                <Accordionn />
            </div>   
        </div>
    </div>

   
  )
}
