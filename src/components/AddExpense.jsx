import React, { useState, useEffect } from 'react';

function AddExpense({ addExpense, editExpense, saveEditExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
    }
  }, [editExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount) {
      const expenseData = { title, amount: parseFloat(amount), id: editExpense ? editExpense.id : Date.now() };
      if (editExpense) {
        saveEditExpense(expenseData);
      } else {
        addExpense(expenseData);
      }
      setTitle('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">{editExpense ? 'Save Edit' : 'Add Expense'}</button>
    </form>
  );
}

export default AddExpense;
