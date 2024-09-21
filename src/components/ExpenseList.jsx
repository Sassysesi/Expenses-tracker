import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense, startEditExpense }) {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
            startEditExpense={startEditExpense}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
