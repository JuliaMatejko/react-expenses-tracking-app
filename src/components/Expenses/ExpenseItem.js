//import React, {useState} from 'react';    //not necessary in the newest version of react. Need to use import in every component in older versions whre JSX code is used

import React, { useState } from "react"; // useState is called REACT HOOK
import "./ExpenseItem.css"; // import css styling
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//const ExpenseItem = (props) => {    // Alternative way of writting JS function using Arrow function
function ExpenseItem(props) {
  // Component in React is just a JavaScript function .
  // The convention is File name, without extention
  //
  // Setting atributes and sending them to the ExpenseItem component.
  // Those atributes can be accessed in ExpenseItem by props parameter(can be named however, byt this is convention)
  // props parameter contains key-value pairs where keys are attribute names and values are values set
  //const expenseDate = Date(2023, 2, 28);
  //const expenseTitle = 'Car Isurance';
  //const expenseAmount = 294.67;

  // const month = props.date.toLocaleString('en-US', {month: 'long'});  // helper variable - good practice !!!! Improves readability
  // const year = props.date.getFullYear();  // helper variable - good practice !!!!
  // const day = props.date.toLocaleString('en-US', {day: '2-digit'});  // helper variable - good practice !!!!

  // using array destructuring - title is a pointer at this managed value stored in props.title,
  // second parameter is a function that can be later called to set a new value
  // naming convention is name of variable and setVariablename
  //const [title, setTitle] = useState(props.title); //useState - react hook, props.title - initial value     'use' - hook    react hooks function   must only be called inside react component functions

  // const clickHandler = () => { // naming convention for event handlers - end with 'Handler'
  //   setTitle('Updated');      // component is evalueted again after the function is executed
  // }

  return (
    // JSX code - you must only have oine root elemnt - wrap everything in one div. To improve readability wrap everything also in ()
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
} // use className instead of CSS class (class is reserved name in JS)

// ANOTHER CORRECT WAY of passing properties - by object destructuring !!!

//function ExpenseItem({ date, title, amount }) { /
//return (
//<div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${amount}</div>
//       </div>
//     </div>
//   );
// }

export default ExpenseItem;
// Export ExpenseItem component.
// Use 'import ExpenseItem from "./components/ExpenseItem";' in other components to use it

// Another way to write components - export in thew same line as a function declaration

//export default function ExerciseComponent() {
//return "First exercise - done!";
//}
