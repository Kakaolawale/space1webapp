import React from 'react'

const Testimonial = () => {
  return (
    
<div class="flex flex-col text-space1-4  items-center w-full gap-8 p-8 mb-8 md:flex-row md:mb-0 flex-between py-20">
     <div className='mb-8 bg-space1-3 shadow-lg rounded-2xl backdrop-blur-lg'>
        <p class="text-3xl font-bold text-center tracking-tighter py-3 px-3">
        testiMONIAL
    </p>
    </div>
    <div class="bg-space1-3 w-72 shadow-lg mx-auto rounded-xl p-4">
        <p class="text-avista2">
            <span class="text-lg font-bold text-avista2">
                “
            </span>
            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            <span class="text-lg font-bold text-avista2">
                ”
            </span>
        </p>
        <div class="flex items-center mt-4">
            <a href="#" class="relative block">
                <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div class="flex flex-col justify-between ml-2">
                <span class="text-sm font-semibold text-avista2">
                    Jean Miguel
                </span>
                <span class="flex items-center text-xs dark:text-avista2">
                    User of Tail-Kit
                    <img src="/icons/rocket.svg" class="w-4 h-4 ml-2"/>
                </span>
            </div>
        </div>
    </div>
    <div class="bg-space1-3 w-72 shadow-lg mx-auto rounded-xl p-4">
        <p class="text-avista2 dark:text-white">
            <span class="text-lg font-bold text-avista2">
                “
            </span>
            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            <span class="text-lg font-bold text-avista2">
                ”
            </span>
        </p>
        <div class="flex items-center mt-4">
            <a href="#" class="relative block">
                <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div class="flex flex-col justify-between ml-2">
                <span class="text-sm font-semibold text-indigo-500">
                    Jean Miguel
                </span>
                <span class="flex items-center text-xs dark:text-gray-400">
                    User of Tail-Kit
                    <img src="/icons/rocket.svg" class="w-4 h-4 ml-2"/>
                </span>
            </div>
        </div>
    </div>
    <div class="bg-space1-3 dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
        <p class="text-gray-600 dark:text-white">
            <span class="text-lg font-bold text-indigo-500">
                “
            </span>
            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            <span class="text-lg font-bold text-indigo-500">
                ”
            </span>
        </p>
        <div class="flex text-avista2 items-center mt-4">
            <a href="#" class="relative block">
                <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div class="flex flex-col justify-between ml-2">
                <span class="text-sm font-semibold text-indigo-500">
                    Jean Miguel
                </span>
                <span class="flex items-center text-xs">
                    User of Tail-Kit
                    <img src="/icons/rocket.svg" class="w-4 h-4 ml-2"/>
                </span>
            </div>
        </div>
    </div>
</div>

  )
}

export default Testimonial
