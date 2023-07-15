"use client"
import { motion } from "framer-motion"

export default function Toolsframework(){
    return(
        <div className="bg-neutral-200 pb-24">
            <h1 className="mt-10 text-4xl strokeFont text-center">YOU WILL LEARN</h1>
            <div className="gap-y-8 mt-10 grid grid-cols-3 justify-items-center w-screen text-center">
                <motion.div className="w-24 h-24"
                    initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{delay:0.5}}
                >
                    <img className="rounded-lg object-cover h-[100%] w-[100%]" alt="nodejs" src="https://ih1.redbubble.net/image.1637717834.1604/aps,504x498,small,transparent-pad,600x600,f8f8f8.u1.jpg"/>
                    <p>NodeJs</p>
                </motion.div>
                <motion.div className="w-24 h-24"
                    initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{delay:0.5}}
                >
                    <img className="rounded-lg object-cover h-[100%] w-[100%]" alt="nodejs" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/full/nextjs.png"/>
                    <p>NextJs</p>
                </motion.div>
                <motion.div className="w-24 h-24 "
                    initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{delay:0.5}}
                >
                    <img className="rounded-lg object-cover h-[100%] w-[100%]" alt="nodejs" src="https://www.stickerpress.in/media/products/800x800/d6061e2a15f14dbaa6a542b313c9305f.jpg"/>
                    <p>MongoDB</p>
                </motion.div>
                <motion.div className="w-24 h-24"
                    initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{delay:0.5}}
                >
                    <img className="rounded-lg object-cover h-[100%] w-[100%]" alt="nodejs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYj4mofRvjSr0MVJzRgbwoGE-6TMHbFEy0G-KwtD8zvhbx6wBpZNjq6kcSkA3ejJhPmg&usqp=CAU"/>
                    <p>MySQL</p>
                </motion.div>
                <motion.div className="w-24 h-24"
                    initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{delay:0.5}}
                >
                    <img className="rounded-lg object-cover h-[100%] w-[100%]" alt="nodejs" src="data:image/jpeg;base64,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"/>
                    <p>Auth</p>
                </motion.div>
                <motion.div className="bg-white w-24 h-24 rounded-lg"
                    initial={{y:50, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{delay:0.5}}
                >
                    <motion.img className="object-cover h-[100%] w-[100%]" alt="nodejs" src="https://cdn.iconscout.com/icon/free/png-256/free-docker-2752207-2285024.png"/>
                    <p>Docker</p>
                </motion.div>
            </div>
            <div className=" mt-24">
                <p className="text-center text-2xl text-slate-900">AND OTHERS...</p>
            </div>
        </div>
    )
}