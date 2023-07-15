"use client"
import { easeInOut, motion } from "framer-motion"
import Bannerani from "./bannerani"
import Introtext from "./intro"
import banner from "../../public/banner.png"

export default function Banner(){
    return(
      <div className="pt-16 w-[100%] md:pb-20"
        style={{backgroundImage:`url(${banner.src})`}}
      >
        <div className='justify-items-center content-center grid md:grid-cols-2 h-[500px] justify-evenly'>
          <Bannerani/>
          <Introtext/>
          <div></div>
          <div className="justify-self-start pt-10 pb-5">
          <motion.button
            className="bg-yellow-400 font-extrabold md:text-2xl text-lg px-2 ml-5"
            whileHover={{scale:1.2}}
            whileTap={{scale:0.9, backgroundColor: "#000000"}}
          >
            JOIN IN
          </motion.button>
          <motion.button
            className="bg-lime-300 font-extrabold md:text-2xl text-lg px-2 ml-5"
            whileHover={{scale:1.2}}
            whileTap={{scale:0.9, backgroundColor: "#000000"}}
          >
            DETAILS
          </motion.button>
          </div>
        </div>
      </div>
    )
}