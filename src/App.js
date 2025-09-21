import React, { useState } from "react"; //not necessary in the newest version of react. Need to use import in every component in older versions whre JSX code is used

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "z8",
    title: "Glow-in-the-dark Duct Tape",
    amount: 12.49,
    date: new Date(2025, 10, 8),
  },
  {
    id: "z7",
    title: "Zombie Survival Guide Book",
    amount: 19.99,
    date: new Date(2025, 9, 7),
  },
  {
    id: "z6",
    title: "Emergency Unicorn Onesie",
    amount: 39.99,
    date: new Date(2025, 8, 6),
  },
  {
    id: "z5",
    title: "Crossbow & Arrows",
    amount: 299.99,
    date: new Date(2025, 7, 5),
  },
  {
    id: "z4",
    title: "Underground Bunker Rent",
    amount: 1200.0,
    date: new Date(2025, 6, 4),
  },
  {
    id: "z3",
    title: "Zombie Repellent Spray",
    amount: 45.0,
    date: new Date(2025, 5, 3),
  },
  {
    id: "z2",
    title: "Canned Beans (500 cans)",
    amount: 350.5,
    date: new Date(2025, 4, 2),
  },
  {
    id: "z1",
    title: "Chainsaw Maintenance",
    amount: 120.99,
    date: new Date(2025, 3, 1),
  },
  {
    id: "e9",
    title: "Water Bill",
    amount: 27.67,
    date: new Date(2025, 2, 11),
  },
  {
    id: "e8",
    title: "Electricity Bill",
    amount: 67.67,
    date: new Date(2025, 1, 15),
  },
  {
    id: "e7",
    title: "Water Bill",
    amount: 25.26,
    date: new Date(2024, 7, 28),
  },
  {
    id: "e6",
    title: "Renewal Car Insurance",
    amount: 357.67,
    date: new Date(2023, 2, 24),
  },
  {
    id: "e5",
    title: "New Chair",
    amount: 150,
    date: new Date(2023, 6, 6),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2019, 2, 12),
  },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // reaact function component
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // Imperative (vanilla JS)...
  //(writing step by step what the program should do, getting DOM elemenmts and changing them etc.)

  //const para = document.createElement('p');
  //para.textContent = 'This is also visible!';
  //document.getElementById('root').append(para);

  //... vs Declarative (React) approach
  //(definig end state of the program, and letting React library generate steps to get to end result)

  return (
    // JSX syntax - JavaScript XML
    // With React, we can use imported ExpenseItem component as html element.
    // Custom components MUST statr with upper case character !!!

    //Setting atributes and sending them to the ExpenseItem component.
    //Those atributes can be accessed in ExpenseItem by props parameter(can be named however, byt this is convention)
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // alternative way, without using JSX syntax - under ythe hood JSX code is transfomed to this
  //return React.createElement(                   // creating element using method from exported react package library
  //'div',    // 1st argument - element type
  //{},       // 2nd argument - element properties
  //React.createElement('h2', {}, "Let's get started!"),    // 3rd and more arguments - element content
  //React.createElement(Expenses, { items: expenses})
  //);
}

export default App;

// 'App' Component will be a root component, main component in our app.
// Other components will be nested inside 'App' component or in other components nested in this App component

// In React we buil 'component tree'
