import React from "react";

export default function HeroBanner1() {
    return (
        <div className='bg-space1one h-full w-full bg-cover bg-center p-20 pb-30'>
        <div className="flex mt-20  text-space1-4 flex-col items-center justify-center">
                <h1 className="mb-2 tracking-tight text-4xl font-bold pt-12">
                Web/Mobile App Development & Visual Designs.
                </h1>
                <p className="text-sm max-w-2xl ">
                We are client-focused, customer-centric, creating tech solutions that deliver 
                tangible business results, Space1's web developers helps 
                brands create the ever-changing scalable digital landscape.
                </p>
                <div className="mt-4">
                    <button className="px-6 py-2 text-white bg-space1-2 rounded-md shadow-md">
                       Learn More
                    </button>
                    
                </div>
            </div>
        </div>
    );
}