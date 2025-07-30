import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import './App.css';

// Main App component to manage expenses
function App() {
  // State to store expenses array
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage when component mounts
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  // Save expenses to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  // Function to delete an expense by id
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Function to edit an expense
  const editExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>
      {/* Form to add/edit expenses */}
      <ExpenseForm addExpense={addExpense} />
      {/* Display total expenses */}
      <TotalExpenses expenses={expenses} />
      {/* List of expenses */}
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
    </div>
  );
}

export default App;