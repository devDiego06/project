import React, { useState } from 'react'


export const Navbar = () => {
    let Links =[
        {name:"Inicio",link:"/"},
        {name:"Servicios",link:"/"},
        {name:"Sobre Nosotros",link:"/"},
        {name:"Productos",link:"/"},
        {name:"Contacto",link:"/"},
      ];
      let [open,setOpen]=useState(false);
    return (
      <div className='shadow-md w-full fixed  top-0 left-0 z-10'>
        <div className='md:flex items-center justify-between backdrop-blur-sm py-4 md:px-10 px-7'>
        <div className='font-bold text-lg cursor-pointer flex items-center
        text-gray-800'>
          <img 
          src="../src/assets/logo.png"
          alt="logo.png" 
          className="w-14"
          />
          <span className="hidden p-4 text-white md:block">
                Bracelets art
            </span>
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <span className="text-white">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </span>
        
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static backdrop-blur-sm md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                <a href={link.link} className='font-bold text-white hover:text-teal-500 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
        </div>
      </div>
    )
}
