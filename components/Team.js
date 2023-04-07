
import Image from 'next/image'

import React from 'react'

const Team = () => {
  return (

      <div class="p-4 m-8 sm:m-10 rounded-2xl text-space1-4 bg-gradient-to-r from-space1-2 via-space1-3 to-space1-7">
    <div className='m-3 p-3 backdrop-blur-lg text-space1-4 shadow-xl rounded-lg lg:w-5'>
    <p class="text-3xl font-bold text-center tracking-tighter text-space1-4 py-5">
     theTEAM
    </p>
    </div>
    <p class="mb-32 text-italic text-xl font-normal text-center text-avista3">
        Meat the best team in the world!
    </p>
    <div class="flex flex-col items-center md:space-y-0 md:flex-row justify-between">
        <div class="relative p-4 lg:px-4 py-8">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" class="relative block">
                    <img alt="profil" src="/images/avistahero6.jpg" class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
                </a>
            </div>
            <div class="px-8 py-4 pt-24 bg-space1-1 rounded-lg shadow dark:bg-gray-800">
                <div class="text-center">
                    <p class="text-2xl text-gray-800 dark:text-white">
                        Patrick Sebastien
                    </p>
                    <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                        Developpeur
                    </p>
                    <p class="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                    </p>
                </div>
                <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                         
                </div>
            </div>
        </div>

        <div class="relative p-4">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" class="relative block">
                    <img alt="profil" src="/images/avistahero5.jpg" class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
                </a>
            </div>

            <div class="px-8 py-4 pt-24 bg-space1-1 rounded-lg shadow dark:bg-gray-800">
                <div class="text-center">
                    <p class="text-2xl text-gray-800 dark:text-white">
                        Charlie
                    </p>
                    <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                        Lead dev
                    </p>
                    <p class="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Charlie, born December 18, 1993 in Challans, is an imitator and pintor.
                    </p>
                </div>
                <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                        
                </div>
            </div>
        </div>
        <div class="relative p-4">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" class="relative block">
                    <img alt="profil" src="/images/avistahero7.jpg" class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
                </a>
            </div>


            <div class="px-8 py-4 pt-24 bg-space1-1 rounded-lg shadow dark:bg-gray-800">
                <div class="text-center">
                    <p class="text-2xl text-gray-800 dark:text-white">
                        Thierry Halliday
                    </p>
                    <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                        CTO
                    </p>
                    <p class="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.
                    </p>
                </div>
                <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                    
                </div>
            </div>


            
        </div>
    </div>


    
</div>

  )
}

export default Team
