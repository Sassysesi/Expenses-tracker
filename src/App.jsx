import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const startEditExpense = (id) => {
    const expenseToEdit = expenses.find(expense => expense.id === id);
    setEditExpense(expenseToEdit);
  };

  const saveEditExpense = (updatedExpense) => {
    setExpenses(
      expenses.map(expense =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setEditExpense(null);
  };

  return (
    <div className="App">
      <Header />
      <AddExpense addExpense={addExpense} editExpense={editExpense} saveEditExpense={saveEditExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} startEditExpense={startEditExpense} />
      <ExpenseTotal expenses={expenses} />
    </div>
  );
}

export default App;
