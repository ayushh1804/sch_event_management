import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
        <div>


            <p className='text-5xl font-bold mt-60 items-center text-center'>Welcome to SRM Event Management Application</p>
     

            <Link to="/event"> <button className='p-3 bg-gray-200 flex justify-center m-auto mt-10 rounded-xl hover:font-bold'>Proceed</button></Link>
        </div>
    )
}

export default Landing
