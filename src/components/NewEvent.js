
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function BasicForm() {
    // Declare state variables for form input values
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${text}\nMessage: ${message}`);
        // Here, you would typically submit the form data to a server or API
        // using a library like Axios or fetch
    };

    return (
        <div>
            <div className='mt-20'>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-center'>
                        <div className='mx-3'>
                            <label className='text-lg'>
                                Select which type of Event you are Planning
                                <select className='mx-3'>
                                    <option value="Sports">Sports</option>
                                    <option value="Tech">Technology</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>
                        <div className='mx-3 '>
                            <label htmlFor="text">Enter Event Organiser Name or ID</label>
                            <input
                                type="text"
                                id="text"
                                value={text}
                                onChange={(event) => setText(event.target.value)}
                            />
                        </div>
                        <div className='mx-3 border'>
                            <label htmlFor="message">Description</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                        </div>
                    </div>
                    <Link to="/event">   <button type="submit" className='mt-10 border bg-gray-100 rounded p-2'>Submit</button></Link>
                </form>

            </div>
            <button className='mt-20 border bg-green-300 rounded-lg hover:bg-green-400 p-3'>Generate Event Registration Link</button>

        </div>
    );
}

export default BasicForm;

