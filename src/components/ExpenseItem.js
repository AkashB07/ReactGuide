import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2021, 1, 16);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 2000;
    const LocationOfExpenditure = 'Bengaluru';
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">Rs {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
