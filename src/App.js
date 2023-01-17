import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94,
      date: new Date(2020, 7, 14),
      location: "Mysuru",
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799, 
      date: new Date(2021, 2, 12),
      location: "Bengaluru", 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294,
      date: new Date(2021, 2, 28),
      location: "Bengaluru",
    },
    {
      id: "e4",
      title: "New Wooden Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Mysuru",
    },
  ];
  
  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
