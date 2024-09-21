import React from 'react';

function ExpenseTotal({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h3>Total: R{total.toFixed(2)}</h3>
    </div>
  );
}

export default ExpenseTotal;
