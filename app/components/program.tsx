'use client'
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'


export default function ContentProgram(){
    const slideRight: Variants = {
        hide : {
          opacity : 0,
          x : -100,
        },
        show : {
          opacity : 1,
          x : 0,
          transition : {
            duration : 1,
          },
        },
      }

      const slideLeft: Variants = {
        hide : {
          opacity : 0,
          x : 100,
        },
        show : {
          opacity : 1,
          x : 0,
          transition : {
            duration : 2,
          },
        },
      }
      
      const slideUp: Variants = {
        hide : {
          opacity : 0,
          y : 100,
        },
        show : {
          opacity : 1,
          y : 0,
          transition : {
            duration : 2,
          },
        },
      }

      const planMenu: Variants = {
        open : {
          scale : 2,
          top : 0,
          bottom : 0,
          right : 0,
          left :0,
        },
        close : {
          scale : 1,
        },
      }
    return(
      <div className='bg-greenblue pb-10' id="bundle">
        <h1 className='mt-28 text-center font-extrabold text-4xl strokeFont mb-10'>COURSE BUNDLE</h1>
        <div className='grid md:grid-flow-row md:grid-cols-3 md:space-y-0 grid-cols-1 space-y-10 w-screen'>
            <motion.div className='card h-auto pb-10 md:mx-10 mx-24'
              initial="hide"
              whileInView="show"
              whileHover={{scale : 1.1}}
              variants={slideRight}
            >
              <img className='border-4 border-gray-950 object-cover rounded-t-md w-[100%] h-[50%]' src='https://images.unsplash.com/photo-1686588216453-1ba2e872efa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt='post' />
              <p className='text-center font-extrabold text-2xl text-blue-300'>STARTER KIT</p>
              <div className='m-2 font-bold'>
                <p>Basics course for a true beginner, includes :</p>
                <ul className='text-lime-200'>
                  <li>✔️ HTML</li>
                  <li>✔️ CSS</li>
                  <li>✔️ JAVASCRIPT</li>
                  <li>✔️ TAILWIND</li>
                  <li>✔️ REACTJS</li>
                </ul>
              </div>
              <div className='justify-center flex'>
                <motion.button
                  className='border-4 font-bold px-2 hover:bg-white hover:text-black '
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.8}}                  
                >
                  DETAILS
                </motion.button>
              </div>
            </motion.div>
            <motion.div className='card h-auto pb-10 md:mx-10 mx-24'
              initial="hide"
              whileInView="show"
              whileHover={{scale : 1.1}}
              variants={slideUp} 
            >
              <img className='border-4 border-gray-950 object-cover rounded-t-md w-[100%] h-[50%]' src='https://images.unsplash.com/photo-1686588216453-1ba2e872efa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt='post' />
              <p className='text-center font-extrabold text-2xl text-yellow-950'>CLASSIC</p>
              <div className='m-2 font-bold'>
                <p>More advanced course with more spice, includes :</p>
                <ul className='text-lime-200'>
                  <li>✔️ STARTER KIT STUFF</li>
                  <li>✔️ FRAMEWORK(Nextjs)</li>
                  <li>✔️ CMS(Hygraph)</li>
                  <li>✔️ NONRELATIONAL DATABASE</li>
                </ul>
              </div>
              <div className='justify-center flex'>
                <motion.button
                  className='border-4 font-bold px-2 hover:bg-white hover:text-black'
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.8}}                  
                >
                  DETAILS
                </motion.button>
              </div>
            </motion.div>
            <motion.div className='card h-auto pb-10 md:mx-10 mx-24'
              initial="hide"
              whileInView="show"
              whileHover={{scale : 1.1}}
              variants={slideLeft}
            >
              <img className='border-4 border-gray-950 object-cover rounded-t-md w-[100%] h-[50%]' src='https://images.unsplash.com/photo-1686588216453-1ba2e872efa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' alt='post' />
              <p className='text-center font-extrabold text-2xl text-yellow-400'>PRO</p>
              <div className='m-2 font-bold'>
                <p>A complete course, includes :</p>
                <ul className='text-lime-200'>
                  <li>✔️ THE CLASSIC STUFF</li>
                  <li>✔️ NODEJS & NODEJS FRAMEWORK</li>
                  <li>✔️ RELATIONAL DB</li>
                  <li>✔️ CMS(Advanced)</li>
                  <li>✔️ SECURITY AND AUTH</li>
                  <li>✔️ DOCKER</li>
                </ul>
              </div>
              <div className='justify-center flex'>
                <motion.button
                  className='border-4 font-bold px-2 hover:bg-white hover:text-black'
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.8}}                  
                >
                  DETAILS
                </motion.button>
              </div>
            </motion.div>
        </div>
      </div>
    )
}