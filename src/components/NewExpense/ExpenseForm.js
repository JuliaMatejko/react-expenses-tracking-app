import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // ways of handleing multiple States

  //1.
  //creating multiple variables for storing State values

  const [enteredTitle, setEnteredTitle] = useState(""); // use useState to store value from the event
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //2. 3.
  //creating one variable (JS object) for storing multiple State values

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // default js event object
    //1.
    setEnteredTitle(event.target.value); //when event is executed value is stored in enteredTitle

    // //2. NOT GOOD - depends on previous version of the state snapshot, might not be the latest snapshot
    // setUserInput({
    //   ...userInput, //using spread operator to pull out all of the key value pairs
    //   enteredTitle: event.target.value // changing value that is interesting for us
    // })

    // //3. GOOD - If your state depends on the previous update stae use this function
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //1.
    setEnteredAmount(event.target.value);

    // //2. NOT GOOD
    // setUserInput({
    //   ...userInput, //using spread operator to pull out all of the key value pairs
    //   enteredAmount: event.target.value // changing value that is interesting for us
    // })

    // //3. GOOD
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    //1.
    setEnteredDate(event.target.value);

    // //2. NOT GOOD
    // setUserInput({
    //   ...userInput, //using spread operator to pull out all of the key value pairs
    //   enteredDate: event.target.value // changing value that is interesting for us
    // })

    // //3. GOOD
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: event.target.value };
    // });
  };

  // // ALTERNATIVE - one handler for all changes, instead of many
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier ==='title') {
  //     setEnteredTitle(value);
  //   } else if (identifier === 'amount') {
  //     setEnteredAmount(value);
  //   } else {
  //     setEnteredDate(value);
  //   }
  // };

  /*CUSTOM handling form submition*/
  const submitHandler = (event) => {
    event.preventDefault(); //prevent deafult browser behaviour - sending request and reloading the page

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //execute function passed in props form NewExpense component
    setEnteredTitle(""); // using two way binding (value property on the input) I can change state (AFTER SUBMITING CLEARIING THE FORM INPUT FIELDS)
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    /*handling form submition*/
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //2-way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2026-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
