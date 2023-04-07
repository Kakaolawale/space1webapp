
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setNavbar(!navbar);
     }
 

  return (
    <nav className="w-full top-0 h-25 shadow-lg fixed lg:mb-8 backdrop-blur-sm bg-space1-3/60 opacity-100 hover:bg-space1-1 ...">
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
                <div className={`mt-top-adjusted ${navbar ? 'adjust-down' : ''}`}>
                    <div className="flex items-center justify-between py-5">
                    <a href="/" className="flex items-center">
        <Image src="/images/space1logo4.png" width={80} height={30} alt="Space1tech Logo" />
       
        
    </a>
                        <div className="md:hidden text-space1-4">
                            <button
                                className="pt-2 rounded-md outline-none focus:border-avista3 focus:border"
                                onClick={handleClick}>

                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 "
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-2 justify-self-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`} 
                    >
                        <div className='space-x-4 text-lg'>
                        <ul className="mb-4 mt-2 items-center pr-16 font-medium text-sm... justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
                            <li className="text-space1-4 hover:text-space1-2">
                                <Link href='/'>
                                HOME
                                </Link>
                            
                            </li>
                            <li className="text-space1-4 hover:text-space1-2">
                            <Link href='/navlinks/about'>About</Link>
                            </li>
                            <li className="text-space1-4 hover:text-space1-2">
                            <Link href='/navlinks/experiences'>Gallery</Link>
                            </li>
                            <li className="text-space1-4 hover:text-space1-2">
                            <Link href='/navlinks/gallery'>Academy</Link>
                            </li>
                            <li className="text-space1-4 hover:text-space1-2">
                            <Link href='/navlinks/gallery'><span className='font-black text-space1-2'>Space1</span>TEAM</Link>
                            </li>
                           
                            <li className="text-space1-4 hover:text-space1-2">
                            <Link href='/navlinks/daypassbookings'>Designs</Link>
                            </li>

                            <li className="text-space1-4 hover:text-space1-2">
                            <Link href='/navlinks/overnightbookings'>Development</Link>
                            </li>
                            <li className="text-space1-2 hover:text-space1-4 text-bold font-black">
                            <Link href='/navlinks/about'>theFutureProject</Link>
                            </li>
                         
                             <div className='bg-space1-2 pr-4 hover:bg-space1-4/50 rounded-xl h-7 w-18 lg:h-8 lg:w-35 sm:h-8 sm:w-35  shadow-md'>
                            <Link href={'/navlinks/booknow'} className="text-space1-4 pl-4 mr-4 text-lg mx-8 lg:my-20">
                        CHECK<span className='font-thin'>OUT</span>
                       </Link>
                       </div>
                         </ul>
                         </div>
                    </div>
                </div>
            </div>
            </motion.main>
    </nav>
  )
}

export default Navbar
