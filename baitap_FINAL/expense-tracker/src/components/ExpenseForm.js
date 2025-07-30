import React, { useState } from 'react';

// Form component for adding new expenses
function ExpenseForm({ addExpense }) {
  // State for form inputs
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return alert('Please fill in all fields');
    const expense = {
      id: Date.now(), // Unique ID based on timestamp
      name,
      amount: parseFloat(amount),
      date,
    };
    addExpense(expense);
    // Reset form
    setName('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Expense Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., Lunch"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Amount (VND)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., 35000"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;