import React from 'react'
import image from "./assets/download.png"
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around mt-3 bg-slate-200 p-3 align-middle'>
        <img src={image} alt="" className='h-10' />
        <p className='text-blue-600 font-bold text-lg'>Faculty of Engineering and Technology</p>
        <div>
        <button className='border border-blue-400 bg-blue-300 rounded-lg hover:bg-blue-500 p-3 mr-3'>Faculty Login</button>
        <button className='border border-blue-400 bg-blue-300 rounded-lg hover:bg-blue-500 p-3'>Student Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
