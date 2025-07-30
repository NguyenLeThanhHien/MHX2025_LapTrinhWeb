import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    date: '',
    method: 'Cash',
    paidTo: '',
    description: '',
    amount: '',
    category: 'General',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.paidTo) {
      alert('Please fill in all fields');
      return;
    }
    addExpense({
      ...formData,
      amount: parseFloat(formData.amount),
    });
    setFormData({
      date: '',
      method: 'Cash',
      paidTo: '',
      description: '',
      amount: '',
      category: 'General',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full" />
        <select value={formData.method} onChange={(e) => setFormData({ ...formData, method: e.target.value })} className="w-full">
          <option value="Cash">Cash</option>
          <option value="Credit">Credit</option>
          <option value="Check">Check</option>
          <option value="Venmo">Venmo</option>
          <option value="PayPal">PayPal</option>
        </select>
        <input type="text" value={formData.paidTo} onChange={(e) => setFormData({ ...formData, paidTo: e.target.value })} className="w-full" />
        <input type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full" />
        <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="w-full" />
        <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full">
          <option value="General">General</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="mt-4 w-full">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;