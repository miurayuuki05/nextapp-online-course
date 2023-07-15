import Link from "next/link";
import {AiOutlineInstagram, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";

export default function Footer(){
    return(
        <div className="bg-white border-t-2 border-t-black w-[100%] h-96">
            <div className="mt-10 grid grid-cols-4 gap-2 justify-items-center">
                <div>
                    <p className="text-lg">CONTACT US</p>
                    <div className="grid md:grid-flow-col grid-cols-3 md:gap-10 mt-5 justify-items-center">
                        <Link href="https://www.google.com/gmail/about/"><AiOutlineMail className="md:scale-[2.5] scale-150"></AiOutlineMail></Link>
                        <Link href="tel:62819936807"><AiOutlinePhone className="md:scale-[2.5] scale-150"></AiOutlinePhone></Link>
                        <Link href="https://www.instagram.com/avior.id_/"><AiOutlineInstagram className="md:scale-[2.5] scale-150"></AiOutlineInstagram></Link>
                    </div>
                </div>
                <div>
                    <p className="ml-10 text-sm">BUNDLE</p>
                    <div className="text-sm gap-2 grid md:pl-10 pl-3 grid-flow-row mt-5 justify-items-center border-l-2 border-l-black">
                        <p className="cursor-pointer select-none">Starter Kit</p>
                        <p className="cursor-pointer select-none">Classic</p>
                        <p className="cursor-pointer select-none">Pro</p>
                    </div>
                </div>
                <div>
                    <p className="ml-10 text-sm">RESOURCE</p>
                    <div className="text-sm gap-2 grid md:pl-10 pl-3 grid-flow-row mt-5 justify-items-center border-l-2 border-l-black">
                        <p className="cursor-pointer select-none">Career</p>
                        <p className="cursor-pointer select-none">Community</p>
                        <p className="cursor-pointer select-none">Privacy Policy</p>
                    </div>
                </div>
            </div>
            <p className="text-center mt-40">©Avior Academy</p>
        </div>
    )
}