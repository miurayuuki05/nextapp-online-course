"use client"
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import wImage from "../../public/W.png"
import pImage from "../../public/R.png"
import rImage from "../../public/P.png"


export default function ProgramSlogan(){
    return(
        <div className="mb-40">
            <h1 className="text-center font-bold text-4xl strokeFont">OUR PROGRAM</h1>
        <div className="border-[16px] border-x-gray-800 grid grid-cols-3 mt-28 w-[100%] text-center justify-items-center">
            <motion.div
                className="w-36 h-36 bg-black hover:text-white text-transparent relative"
                initial={{opacity: 0, x: -150}}
                whileInView={{opacity: 1, x: 0}}
                whileTap={{scale:0.9}}
                whileHover={{borderRadius : "0%", scale : 1.2, rotate: [0, 360]}}
                transition={{duration: 0.7}}
            >
                <Image alt="w" className="w-[100%] h-[100%] object-cover hover:opacity-0" src={wImage}></Image>
                <p className="mt-10 absolute top-[-3px] right-0 left-0">WATCH <br/> THE LESSONS 🎞️</p>
            </motion.div>

            <motion.div
                className="w-36 h-36 bg-black hover:text-white text-transparent"
                initial={{opacity: 0, y: -150,}}
                whileInView={{opacity: 1, y: 0}}
                whileTap={{scale:0.9}}
                whileHover={{borderRadius : "0%", scale : 1.2, rotate: [0, 360], }}
                transition={{duration: 0.7}}
            >
                <Image alt="w" className="w-[100%] h-[100%] object-cover hover:opacity-0" src={pImage}></Image>
                <p className="mt-10 absolute top-0 right-0 left-0">PRACTICE IT 👨‍💻</p>
            </motion.div>

            <motion.div
                className="w-36 h-36 bg-black hover:text-white text-transparent"
                initial={{opacity: 0, x: 150}}
                whileInView={{opacity: 1, x: 0}}
                whileTap={{scale:0.9}}
                whileHover={{borderRadius : "0%", scale : 1.2, rotate: [0, 360]}}
                transition={{duration: 0.7}}
            >
                <Image alt="w" className="w-[100%] h-[100%] object-cover hover:opacity-0" src={rImage}></Image>
                <p className="mt-10 absolute top-0 right-0 left-0">READ <br/> THE DOCS 📖</p>
            </motion.div>

        </div>
        </div>
    )
}