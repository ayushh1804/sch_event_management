import React, { useState } from 'react';

function Inputpage() {
  const [formData, setFormData] = useState({
    name: '',
    venues: '',
    date: ''
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
    <form onSubmit={handleSubmit} autocomplete="off">
      <label className='text-lg'>
        Name of the Event
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border rounded-lg mx-3"/>
      </label>
      <label className='text-lg'>
        Venue:
        <select className='mx-3'>
  <option value="Dr. T.P Ganesan Auditorium">Dr. T.P Ganesan Auditorium</option>
  <option value="Seminar Hall">Seminar Hall</option>
  <option selected value="Minihall 1">Minihall 1</option>
  <option value="mango">Minihall 2</option>
</select>
        {/* <input list="venues" name="venues" value={formData.venues} onChange={handleChange} className="mx-3" /> */}
      </label>
      <label className='text-lg'>
        Date
        <input type="date" value={formData.date} onChange={handleChange}  className="mx-3"/>
      </label>
      <button type="submit" className='border p-2 rounded-lg bg-gray-100 ml-3'>Submit</button>
    </form>
    </div>
  );
}

export default Inputpage;
