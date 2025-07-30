import React, { useState } from 'react';

// Form component for adding new expenses
function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [method, setMethod] = useState('Cash');
  const [paidTo, setPaidTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !paidTo) return alert('Please fill in all fields');
    const expense = {
      id: Date.now(),
      date,
      method,
      paidTo,
      description: name,
      amount: parseFloat(amount),
    };
    addExpense(expense);
    setName('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
    setMethod('Cash');
    setPaidTo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Method</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="Cash">Cash</option>
          <option value="Credit">Credit</option>
          <option value="Check">Check</option>
          <option value="Venmo">Venmo</option>
          <option value="PayPal">PayPal</option>
        </select>
      </div>
      <div>
        <label>Paid To</label>
        <input
          type="text"
          value={paidTo}
          onChange={(e) => setPaidTo(e.target.value)}
          placeholder="e.g., Weller Corp"
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., August delivery"
        />
      </div>
      <div>
        <label>Amount (VND)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 80000"
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;