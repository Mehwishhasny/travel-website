import Link from 'next/link';

export function Footer(){
    return(
        <div className="flex w-full bg-[#B88E2F]/90 backdrop-blur-md border border-gray/50">
        
            <div className="flex flex-col justify-between w-full px-4">
                <div className="flex-col items-center m-2 mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57902.86406491397!2d67.1219712!3d24.900403200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1735388303135!5m2!1sen!2s"
                        width="80%"
                        height="170"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="mt-4">
                        <a
                            href="https://www.google.com/maps/place/Karachi,+Karachi+City,+Sindh,+Pakistan/@25.1897437,65.9725658,9z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23!8m2!3d24.8607343!4d67.0011364!16zL20vMDRjam4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline ml-6 font-bold text-sm"
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-end max-w-sm mt-6">
                    <h1 className="sm:text-2xl text-center text-lg font-extrabold text-[#B88E2F] bg-white sm:px-2 py-1 rounded sm:mr-16">
                        De One World Tour & Travels
                        </h1>
                    <p className="text-sm text-white mt-4 p-4">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elittia maxime consequuntur dolorem, iusto nisi aliquid voluptatibus odit recusandae temporibus. Deserunt nobis temporibus quas impedit quod.
                    </p>
                </div>
            </div>

            <div className="flex flex-col text-gray-800 space-y-4 items-center md:justify-center justify-start sm:mt-0 mt-3">
            <Link href="#">
            Home
            </Link>

            <Link href="#">
            About
            </Link>

            <Link href="#">
            Packages
            </Link>

            <Link href="#">
            Contact
            </Link>

            <Link href="#">
            Blog
            </Link>
            </div>

            <div className="flex justify-center text-white items-end mb-2 sm:mt-0 mt-6">
                <p className="text-sm">© 2024 De One world. All rights reserved.</p>
            </div>
        </div>
    );
}



export default Footer;