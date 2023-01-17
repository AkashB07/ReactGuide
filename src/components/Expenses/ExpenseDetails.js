import React, {useState} from "react";
import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const [amount, setAmount] = useState(props.amount);
  const editAmount = () => {
    setAmount(100);
    console.log(amount);
  };

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">Rs {amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={editAmount}>Change Amount</button>
    </div>
   
  );
}

export default ExpenseDetails;
