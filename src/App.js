import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  
  return (
    <div>
      <h2>Let's get started!</h2>
    
      {expenses.map(expense =>{
        return(
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          ></ExpenseItem>
        )
      })}
      
    </div>
  );
}

export default App;