import React from 'react';

function ExpenseItem({ expense, deleteExpense, startEditExpense }) {
  return (
    <li>
      <span>{expense.title}: R{expense.amount.toFixed(2)}</span>
      <div>
        <button onClick={() => startEditExpense(expense.id)}>Edit</button>
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ExpenseItem;
