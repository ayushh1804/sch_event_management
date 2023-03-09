import React from 'react'
import { Link } from 'react-router-dom'
const Eventdetails = () => {
  return (
    <div>
      <div className='flex justify-center items-center'>
      <Link to="/PrevEvents"> <button className='p-3 bg-gray-200 flex justify-center m-auto mt-10 rounded-xl hover:font-bold mr-3'>Browse Previous Event</button></Link>
      <Link to="/NewEvents"> <button className='p-3 bg-gray-200 flex justify-center m-auto mt-10 rounded-xl hover:font-bold ml-3'>Book New Event</button></Link>
      </div>
    </div>
  )
}

export default Eventdetails
