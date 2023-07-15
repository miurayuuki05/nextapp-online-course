import { easeInOut, motion } from "framer-motion"

export default function Bannerani(){
    return(
      <div>
        <motion.div
          className='w-1 bg-white h-1 mt-20 left-64 rounded-full absolute'

          animate={{
            y : [0, 20, 0],
            x : [0, 20, 0],
          }}
          transition={{duration : 4, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
          className='w-4 bg-white h-4 mt-36 ml-36 rounded-full absolute'

          animate={{
            y : [0, -20, 0],
            x : [0, 50, 0],
          }}
          transition={{duration : 7, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
          className='w-2 bg-black h-2 mt-64 right-23 rounded-full absolute'

          animate={{
            y : [20, 0, 20],
            x : [0, 40, 0],
          }}
          transition={{duration : 8, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
          className='w-1 bg-black h-1 mt-32 rounded-full absolute'

          animate={{
            y : [0, 20, 0],
            x : [0, 20, 0],
          }}
          transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
          className='w-3 bg-white h-3 mt-20 mr-56 absolute'

          animate={{
            y : [0, 20, 0],
            x : [0, -50, 0],
          }}
          transition={{duration : 5, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
          className='w-5 bg-black h-5 mt-12 ml-44 absolute'

          animate={{
            y : [0, 10, 0],
            x : [0, 30, 0],
          }}
          transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
          className='w-3 bg-white h-3 mt-64 ml-44 absolute'

          animate={{
            y : [0, -10, 0],
            x : [0, 30, 0],
          }}
          transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>
        
        <motion.div
          className='w-5 bg-black h-5 left-28 mt-60 mr-64 absolute'

          animate={{
            y : [0, 10, 0],
            x : [0, 30, 0],
          }}
          transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
            className="w-0 h-0 border-r-transparent border-r-[10px] border-l-transparent border-l-[10px] border-b-[20px] border-b-black mt-44 ml-48 absolute"
            animate={{
                y : [0, 10, -10, 0],
                x : [0, 30, 20, 0],
            }}
            transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>
        
        <motion.div
            className="w-0 h-0 border-r-transparent border-r-[5px] border-l-transparent border-l-[5px] border-b-[10px] border-b-white mt-44 mr-52 absolute"
            animate={{
                y : [0, -10, 25, 0],
                x : [0, 20, 40, 0],
            }}
            transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
            className="left-32 w-0 h-0 border-r-transparent border-r-[15px] border-l-transparent border-l-[15px] border-b-[25px] border-b-white mt-28 mr-60 absolute"
            animate={{
                y : [0, 10, -25, 0],
                x : [0, 20, -40, 0],
            }}
            transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>

        <motion.div
          className='w-3 bg-white h-3 mt-48 mr-72 left-32 absolute'

          animate={{
            y : [0, 10, -4, 0],
            x : [0, -20, -30, 0],
          }}
          transition={{duration : 10, repeat: Infinity, ease: "easeInOut"}}
        >
        </motion.div>
        {/* <motion.div className="mt-36"
            initial={{
              x : -50,
              y : -50,
            }}
            
            animate={{
              x : [-40,40,-40],
              y : [-40,40,-40, 23, -40],
            }}
            transition={{
              repeat: Infinity, duration:10, ease: easeInOut
            }}
          >
            <p className="text-5xl font-extrabold opacity-50 text-blue-300">
              AVIOR
            </p>
          </motion.div> */}
      </div>
    )
}