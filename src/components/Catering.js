import React from 'react'

const Catering = () => {
    return (
        <div className='bg-gray-100'>
            <div className='p-4'>
                <h1 className='text-3xl mt-40 font-bold'>Choose Refreshments to be served</h1>

                <div className='my-2'>
                    <input type="checkbox" id="scales" name="scales" />
                    <label for="scales">Pizza</label>
                </div>

                <div className='my-2'>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns">Fruit Juice</label>
                </div>
                <div className='my-2'>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns">Tea/Coffee</label>
                </div>
                <div className='my-2'>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns">Cutlet</label>
                </div>
                <div className='my-2'>
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns">Red Bull</label>
                </div>
            </div>
            <div>
                <button className='border bg-gray-100 rounded-lg my-5 p-3 font-bold hover:bg-blue-300'>Submit</button>
            </div>
        </div>
    )
}

export default Catering

