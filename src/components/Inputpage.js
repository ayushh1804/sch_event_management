import React, { useState } from 'react';

function Inputpage() {
  const [formData, setFormData] = useState({
    name: '',
    venues: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit form data
  }

  return (
    <div className=''>
        <p className='my-40 text-3xl font-semibold capitalize'>Please enter the event details</p>
    <form onSubmit={handleSubmit}>
      <label>
        Name of the Event
        <input type="text" name="name" value={formData.name} onChange={handleChange} className=""/>
      </label>
      <label>
        Venue:
        <input list="venues" name="venues" value={formData.venues} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Inputpage;
