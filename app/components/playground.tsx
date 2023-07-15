"use client"
import { motion } from "framer-motion"

export default function Playground(){
    return(
        <>
            <div className="border border-black w-[80%] mt-36 h-96 mx-2">
                <motion.div
                    className="fixed bottom-0 top-0 rounded-full w-10 h-10 bg-black"
                    drag
                    dragConstraints={{
                        top:-100,
                        bottom:100,
                        right:100,
                        left:-100,
                    }}
                >    
                </motion.div>
            </div>
        </>
    )
}