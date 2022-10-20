import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setEdting] = useState(false);

  const onSaveExpenseDataHandler = (data) => {
    const expense = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense);
    setEdting(false);
  };

  const startEditingHandler = () => {
    setEdting(true);
  };

  const stopEdtingHandler = () => {
    setEdting(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add a New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEdtingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
