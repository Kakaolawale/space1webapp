import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Form1 = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [bookingComplete, setBookingComplete] = useState(false);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookingData = {
      checkInDate,
      checkOutDate,
      numberOfGuests,
      roomType,
    };

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();
    console.log(data);
  };
  
  if (bookingComplete) {
    // Fetch booking data and pass it to NextStage component
    const [bookingData, setBookingData] = useState(null);
    useEffect(() => {
      const fetchBookingData = async () => {
        const response = await fetch("/api/bookings");
        if (response.ok) {
          const data = await response.json();
          setBookingData(data);
        }
      };
      fetchBookingData();
    }, []);



 
  }

  return (
    <div className='mt-2 mx-3 mb-20 pt-20'>
      <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 3 }}
      transition={{ duration: 2 }}
      >
      <h1 className='tracking-tight text-2xl mb-10 ml-8 font-extrabold leading-8 text-space1-4 sm:text-3xl sm:leading-9'>Order a short term GIG for your Next Project, by specifying your Budget and Timeline.</h1>
    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row shadow-xl backdrop-blur-lg items-center md:items-center 
    mx-8 my-4 rounded-lg md:mx-4 md:rounded-2xl bg-space1-3/70
     py-4 mt-4 text-space1-4' >

      
      
      <label className='md:mx-8 my-3 font-bold'>
        <span className='mr-3'>PROJECT START DATE</span>
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} className='text-space1-2 px-4 rounded-lg' />
      </label>
      <label className='my-3 md:mx-2 font-bold'>
      <span className='mr-3'>PROJECT END DATE</span>
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} className='text-space1-2 px-4 rounded-lg' />
      </label>
      <label className='my-3  md:mx-2 font-bold '>
      <span className='mr-3'>NUMBER OF PROJECTS</span>
        <input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} className='text-space1-2 px-1 rounded-lg' />
      </label>
      <label className='my-3  md:mx-2 font-bold'>
      <span className='mr-3'>PROJECT TYPE</span>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className='text-space1-2 px-4 font-bold rounded-lg'>
          <option value="">Select Project Type</option>
          <option value="Graphics">Graphics</option>
          <option value="Animation">Animation</option>
          <option value="Branding">Branding</option>
          <option value="Web App Development">Web App Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Desktop Software Solution">Desktop Software Solution</option>  
        </select>
      </label>
      <div className='bg-space1-1 rounded-xl my-3 md:mx-8'>
      <button type="submit" className='py-1 px-2
     text-space1-4 font-semibold text-sm'>ORDER NOW
     </button>
      </div>
    </form>
    </motion.div>
    </div>
  );
};

export default Form1;
