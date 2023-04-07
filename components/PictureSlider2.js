import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";


const PictureSlider2 = () => {

    const images = [
        { url: "/images/space1three.jpg", alt: "Image 1" },
        { url: "/images/space1fifteen.jpg", alt: "Image 2" },
        { url: "/images/space1five.jpg", alt: "Image 3" },
      ];
      


  return (
        <div className='mt-20 ml-8 mr-8'>
            <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
           <h1 className="ml-4 mr-8 mt-8 block pL-20 mb-8 text-4xl tracking-tight font-extrabold text-space1-4 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>
                <span className="block text-indigo-600 xl:inline">
                  the<span className='text-space1-2'>FUTURE!</span>
                </span>
              </h1>
              <div className="block pL-20 mb-8">
            <h1 className="ml-4 mr-8 mt-8 text-space1-4">We work closely with small scale and enterprise level customers to create outstanding high 
              performing and secure custom websites, mobile apps and visual branding such as 3Ds and animations with a focus on unique, professional 
              creative designs. Whatever your project requires, Space1 has the tools and 
              experience to ensure that your goals are not only met, but also secured and rewarding.</h1>
            
            </div>
      <Slider 
      className='rounded-xl'
      autoplay={true} autoplaySpeed={3000}
      arrows={true}
      dots={true}
      slidesToShow={3}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
   >
    {images.map((image) => (
    <div key={image.url}>
      <img src={image.url} alt={image.alt} className='rounded-2xl object-cover' />
    </div>
  ))}
     </Slider>
     </motion.main>
     </div>
  )
}

export default PictureSlider2
