import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Firsthero from './Firsthero'
const Layouts = ({children}) => {
  return (
    <div>
      <Navbar />
      
      {children}
      <Footer />
    </div>
  )
}

export default Layouts
