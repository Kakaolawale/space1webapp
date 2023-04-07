import React from "react";

export default function PageSection2() {
    return (
        <div className="w-full mt-6 bg-space1seven p-10 rounded-lg ... bg-cover bg-center ... items-center justify-center">
            <div className="flex flex-col  items-center justify-center text-space1-4">
                <h1 className="text-4xl font-bold tracking-tighter">The Future Of Tech...</h1>
                
                <div className="mt-4">
                    <button className="px-6 py-2  items-center justify-center text-space1-4 bg-space1-2 rounded-md shadow-md">
                      Learn More...
                    </button>
                </div>
          
            </div>
            <hr className="my-6 border-space1-4 sm:mx-auto dark:border-avista3 lg:my-8" />
            <div className="flex flex-col text-space1-4  items-center justify-center">
                
                <p className="text-left ... text-sm">A place that will leave you floating in nostalgia with treasured times and 
                countless generations.</p>
                
          
            </div>

            
        </div>
    );
}


