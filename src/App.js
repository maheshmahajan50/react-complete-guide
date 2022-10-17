import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "First title",
      price: 344.44,
      date: new Date(2022, 3, 28),
    },
    {
      id: "e2",
      title: "Second title",
      price: 453.44,
      date: new Date(2022, 4, 12),
    },
    {
      id: "e3",
      title: "Third title",
      price: 123.44,
      date: new Date(2022, 3, 4),
    },
  ];
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
}

export default App;
