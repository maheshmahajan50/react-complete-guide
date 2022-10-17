import "./App.css";
import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </>
  );
}

export default App;
