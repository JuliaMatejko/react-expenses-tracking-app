//import React from 'react';    //not necessary in the newest version of react. Need to use import in every component in older versions whre JSX code is used

import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); // helper variable - good practice !!!! Improves readability
  const year = props.date.getFullYear(); // helper variable - good practice !!!!
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // helper variable - good practice !!!!

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
