import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Links(){
    return(
        <div className="w-full h-[90px] md:p-2 p-1 bg-[#B88E2F] flex md:flex-row flex-col justify-between rounded-sm">
            <p className="flex md:justify-start justify-center mt-1 text-white md:text-lg text-sm md:mx-10 mx-0 auto-color-zoom"> Book now and Avail 30% discount now !!! </p>

            <div className="flex md:justify-between justify-center items-center md:gap-6 gap-4 md:mt-0 mt-1">
                <Link href="https://www.facebook.com/deoneworldtravels/" target="_blank">
            <Facebook className="text-white cursor-pointer"/>
            </Link>

            <Link href="https://www.instagram.com/deoneworldtravels/" target="_blank">
            <Instagram className="text-white cursor-pointer"/>
            </Link>

            <Link href="https://youtube.com/@deoneworldtravels" target="_blank">
            <Youtube className="text-white cursor-pointer"/>
            </Link>
            
            <Link href="#">
            <Twitter className="text-white cursor-pointer"/>
            </Link>
            
            <Link href="#">
            <Linkedin className="text-white cursor-pointer"/>
            </Link>
          
            </div>

            <div className="flex md:justify-end md:mx-16 mx-0 justify-center">
                <a href="#" className="bg-white text-[#B88E2F] md:px-4 px-2 md:text-[16px] text-[10px] py-1 rounded-md bg-gray-800 hover:bg-gray-200 hover:text-gray-800">
                    Book Now
                </a>
                </div>
            </div>
    )
}

export default Links;