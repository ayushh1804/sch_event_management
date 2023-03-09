import React, { useState } from 'react';
import styles from "./calendar.module.css"

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleClick = (date) => {
    setSelectedDate(date);
  };

  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const days = [];

  for (let i = 0; i < daysOfWeek.length; i++) {
    days.push(<div key={i}>{daysOfWeek[i]}</div>);
  }

  const firstDay = firstDayOfMonth(currentMonth, currentYear);
  const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);

  for (let i = 1; i <= firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    days.push(
      <div
        key={i}
        className={`day ${date.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
        onClick={() => handleClick(date)}
      >
        {i}
      </div>
    );
  }

  return (
    <div className='mt-20 text-2xl font-normal '>
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button className='border p-1' onClick={() => setSelectedDate(new Date())}>Today</button>
        <h2 className='font-semibold'>
          {monthsOfYear[currentMonth]} {currentYear}
        </h2>
      </div>
      <div className={`${styles.days} mt-8`}>{days}</div>
    </div>
    </div>
  );
}

export default Calendar;
