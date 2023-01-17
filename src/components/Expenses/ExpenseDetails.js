import React from "react";
import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  const clickHandler = () => {
    console.log('Clicked!!')
  }
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete Expense</button>
    </div>
   
  );
}

export default ExpenseDetails;
