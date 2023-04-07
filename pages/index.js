import Head from 'next/head'
import PageSection2 from '../components/PageSection2'
import PageSection1 from '../components/PageSection1'
import PageSection3 from '../components/PageSection3'
import HeroBanner1 from '../components/HeroBanner1'
import PictureSlider from '../components/PictureSlider'
import PictureSlider2 from '../components/PictureSlider2'
import PictureSlider3 from '../components/PictureSlider3'
import Team from '../components/Team'
import Form1 from '../components/Form1'
import VerticalLine from '../components/VerticalLine'
import Roomfeatures from '../components/Roomfeatures'
import Testimonial from '../components/Testimonial'
import CircleVector from '../components/CircleVector'
import { motion } from "framer-motion";



export default function Home() {
  return (
    <div className='bg-space1-1'>
      <Head>
        <title>Space1 Technology Solutions</title>
        <meta name="Space1Tech" content="Space1 Technology Solutions...the future of Technology." />
        <link rel="space1logo" href="/favicon.ico" />
      </Head>
      
      <div></div>
      <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
      <HeroBanner1 />
      
      <PictureSlider3 />
      <div className="flex items-center mt-4 justify-center h-48">
      <VerticalLine />
      </div>
      <div className='flex items-center justify-center'>
      <CircleVector />
      </div>
      <PictureSlider2 />
      <Form1 />
      <Roomfeatures />
      <div className='mb-8 pb-10'>
      <div className="flex items-center mt-4 justify-center h-48">
      <VerticalLine />
      </div>
      <div className='flex items-center justify-center'>
      <CircleVector />
      </div>
      </div>
      <PictureSlider />
      <PageSection3 />
      <PageSection1 />
      <Team />
     
      <Testimonial />

      <div className="flex items-center mt-4 justify-center h-48">
      <VerticalLine />
      </div>
      <div className='flex items-center justify-center'>
      <CircleVector />
      </div>

      <PageSection2 />
      </motion.main>
      </div>
  )
}
