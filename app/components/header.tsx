"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {TiThMenuOutline } from 'react-icons/ti'

export default function Header(){  
    const [menuState, changeState] = useState(false);

    const menuButton = ()=>{
      if(menuState === true){
        changeState(false)
      }else{
        changeState(true)
      }
    }

    return(
        <div className="flex fixed justify-between w-screen pt-3 pb-2">
        <div className='ml-12 flex'>
          <div>
            <img
              className="mt-2"
              height={60}
              width={60}
              src="/favicon.ico"
              alt='logo'
            />
          </div>
          <p className="text-white mt-6 ml-2">Avior Academy</p>
        </div>
        <div className='mr-24'>
          <button className="md:hidden block absolute right-10 top-3" onClick={menuButton}><TiThMenuOutline className="mt-5" size={35}/></button>
          <ul className={(menuState) ? "md:flex mb-10 opacity-100 duration-200 mt-4" : "mb-10 md:flex opacity-0 md:opacity-100 duration-200 mt-4"}>
            <li onClick={menuButton} className='mx-3'><Link className="bg-gray-950 rounded-full text-white px-2 hover:bg-white hover:text-black duration-200 font-extrabold text-base" href="./">PROGRAM</Link></li>
            <li onClick={menuButton} className='mx-3'><a className="bg-gray-950 rounded-full text-white px-2 hover:bg-white hover:text-black duration-200 font-extrabold text-base" href="#bundle">BUNDLE</a></li>
            <li onClick={menuButton} className='mx-3'><Link className="bg-gray-950 rounded-full text-white px-2 hover:bg-white hover:text-black duration-200 font-extrabold text-base" href="./community">COMMUNITY</Link></li>
          </ul>
        </div>
      </div>
    )
}