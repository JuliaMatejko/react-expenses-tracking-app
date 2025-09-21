import React, { useState } from "react"; //not necessary in the newest version of react. Need to use import in every component in older versions whre JSX code is used

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Chart/ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2025");
  //const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');  1. WRONG --> if you mange state that is dependent on another state use computed State

  // let filterInfoText = "2019, 2021 & 2022"; //  2. GOOD --> instead use variable that will hold computed state value

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021 & 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020 & 2022";
  // } else {
  //   filterInfoText = "2019, 2021 & 2022";
  // }

  const filterChangeHandler = (selectedYear) => {
    //  2. GOOD
    setFilteredYear(selectedYear);
  };
  // const filterChangeHandler = (selectedYear) => {    //1. WRONG
  //   setFilteredYear(selectedYear);
  //   if(selectedYear === '2019') {
  //     setFilterInfoText('2020, 2021 & 2022');
  //   } else if (selectedYear === '2020') {
  //     setFilterInfoText('2019, 2021 & 2022');
  //   } else if (selectedYear === '2021') {
  //     setFilterInfoText('2019, 2020 & 2022');
  //   } else if (selectedYear === '2022') {
  //     setFilterInfoText('2019, 2020 & 2021');
  //   }
  // };

  /* <ExpenseItem
        title={expenses[0].title} // can also hardcode data ex. title='Toilet Paper'
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */

  const filteredExpenses = props.items.filter((expense) => {
    //filternig implementation
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* <ExpenseItem
          title={props.items[0].title} // can also hardcode data ex. title='Toilet Paper'
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}
