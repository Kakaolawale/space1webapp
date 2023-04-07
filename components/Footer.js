import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
      
<footer className="p-4 w-full bg-space1-1 rounded-lg shadow md:px-6 md:py-8 text-space1-4">
    <div className="sm:flex sm:items-center sm:justify-center md:flex md:justify-evenly">
    <span className="self-center text-sm font-semibold whitespace-nowrap">Welcome to <span className='font-bold'>Space1 Technology Solutions</span>...the future...</span>
    </div>

    <hr className="my-6 border-avista2 sm:mx-auto dark:border-avista2 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      <span className='font-bold'>2023©</span> Space1techIO™
      All Rights Reserved.
      <br />
    <span className='font-bold text-sm'><a href="https://space1tech.business.site" className="hover:underline text-xs">Site Developed By Space1 Technology Solutions.</a></span></span>
</footer>

    </div>
  )
}

export default Footer
