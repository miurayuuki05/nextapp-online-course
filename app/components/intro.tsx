import localFont from "next/font/local"
import { Catamaran } from "next/font/google"

const modernAge = localFont({ src : '../Modern_Age.woff2'})
const catamaran = Catamaran({weight: "900", subsets:["latin"] })

export default function Introtext(){
    return(
        <div className={catamaran.className}>
        <div className="text-white mt-24 mx-3">
            <h1 className="md:text-7xl text-4xl font-extrabold">BE A FULL TIME <br/> DEVELOPER ✨</h1>
            <p className="text-lime-500 font-semibold ml-2">Join our course program to indulge in the world of web development. Not only backend or frontend <br/> Its Fullstack Wonder🎉</p>
        </div>
        </div>
    )
}