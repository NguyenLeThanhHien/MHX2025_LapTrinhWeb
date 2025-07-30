import React, { useState } from 'react';

function ExpenseItem({ expense, deleteExpense, editExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState(expense.date);
  const [method, setMethod] = useState(expense.method);
  const [paidTo, setPaidTo] = useState(expense.paidTo);
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const handleSave = () => {
    if (!description || !amount || !paidTo) return alert('Please fill in all fields');
    editExpense({ id: expense.id, date, method, paidTo, description, amount: parseFloat(amount), category });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <li className="p-2 border-b last:border-b-0">
      {isEditing ? (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full" />
          <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full">
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
            <option value="Check">Check</option>
            <option value="Venmo">Venmo</option>
            <option value="PayPal">PayPal</option>
          </select>
          <input type="text" value={paidTo} onChange={(e) => setPaidTo(e.target.value)} className="w-full" />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full" />
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full" />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full">
            <option value="General">General</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={handleSave} className="mt-2 w-full bg-green-500 text-white p-1 rounded">Save</button>
          <button onClick={() => setIsEditing(false)} className="mt-2 w-full bg-red-500 text-white p-1 rounded">Cancel</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 items-center">
          <span>{new Date(expense.date).toLocaleDateString()}</span>
          <span>{expense.method}</span>
          <span>{expense.paidTo}</span>
          <span>{expense.description}</span>
          <span>{expense.amount.toLocaleString()} VND</span>
          <span>{expense.category}</span>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-1 rounded">Delete</button>
        </div>
      )}
    </li>
  );
}

export default ExpenseItem;