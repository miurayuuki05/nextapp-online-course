"use client"
import { getProject } from "@/sanity/sanity-utils"
import Header from "../components/header";
import { Variants, motion } from "framer-motion";


export default async function Community(){
    
    const projects = await getProject();

    const slideUp: Variants = {
        hide : {
          opacity : 0,
          y : 80,
        },
        show : {
          opacity : 1,
          y : 0,
          transition : {
            duration : 0.5,
          },
        },
      }

    return(

        <div className="flex min-h-screen flex-col items-center">
            <Header/>
            <div className="mt-44 grid md:grid-flow-row md:grid-cols-3 grid-cols-1 gap-y-10 w-screen">
            {projects.map((project : any) =>(
                <motion.div
                    initial="hide"
                    whileInView="show"
                    whileHover={{scale : 1.1}}
                    whileTap={{scale : 0.95}}
                    variants={slideUp}
                 key={project._id} className="card-2 h-44 md:mx-10 mx-24">

                    <img className="object-cover rounded-t-md w-[100%] h-[50%]" src="https://images.unsplash.com/photo-1686824581038-f4d7ccc7d03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="post1"></img>
                    <p className="ml-2 mt-2 font-extralight">{project.name}</p>

                </motion.div>
            ))}
            </div>
        </div>
    )
}