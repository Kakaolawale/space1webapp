import { motion } from "framer-motion";

const PictureSlider3 = () => {
  return (
    <div className="relative z-0 mt-20 mx-10 rounded-xl backdrop-blur-lg bg-gradient-to-r from-space1-2 via-space1-3 to-space1-7 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
          >
            
            <div className="block mr-10 pr-20 sm:text-center text-space1-4 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-space1-4 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>
                <span className="block text-indigo-600 xl:inline">
                  SPACE1!
                </span>
              </h1>
            </div>
          </motion.main>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="sm:mt-0 sm:ml-4 sm:flex-shrink-0 sm:flex sm:items-center"
          >
            <div className="block mr-10 pr-20">
            <h1 className="mr-8 mt-8 text-space1-4">Space1 Technology solutions is 
            a luxury scope full service tech startup based in Nigeria. We are
            inspired to create more than just a tech brand that will leave
            beyond time, but also as a figure that stands-out to redefine
            the way people love and become inspired about the future they want
            to see through powerful technology they use everyday.</h1>
            <a
              href="#"
              className="mt-8 rounded-xl text-base font-medium text-space1-4"
            >
              Take a Stroll...
            </a>
            </div>
            
          </motion.div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-56 mb-4 rounded-xl w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/space1flag.jpg"
            alt="Next.js App"
          />
        </div>
      </div>
    </div>
  );
};




export default PictureSlider3;
