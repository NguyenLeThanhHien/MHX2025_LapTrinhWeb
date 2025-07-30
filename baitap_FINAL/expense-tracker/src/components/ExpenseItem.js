import React, { useState } from 'react';

// Component for a single expense item
function ExpenseItem({ expense, expenses, deleteExpense, editExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState(expense.date);
  const [method, setMethod] = useState(expense.method);
  const [paidTo, setPaidTo] = useState(expense.paidTo);
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const handleSave = () => {
    if (!description || !amount || !paidTo) return alert('Please fill in all fields');
    editExpense({ ...expense, date, method, paidTo, description, amount: parseFloat(amount), category });
    setIsEditing(false);
  };

  // Calculate running total based on the passed expenses array
  const runningTotal = expenses
    .slice(0, expenses.findIndex((e) => e.id === expense.id) + 1)
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <tr>
      {isEditing ? (
        <>
          <td><input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></td>
          <td>
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="Cash">Cash</option>
              <option value="Credit">Credit</option>
              <option value="Check">Check</option>
              <option value="Venmo">Venmo</option>
              <option value="PayPal">PayPal</option>
            </select>
          </td>
          <td><input type="text" value={paidTo} onChange={(e) => setPaidTo(e.target.value)} /></td>
          <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></td>
          <td><input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /></td>
          <td>{runningTotal.toLocaleString()} VND</td>
          <td>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="General">General</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Other">Other</option>
            </select>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{new Date(expense.date).toLocaleDateString()}</td>
          <td>{expense.method}</td>
          <td>{expense.paidTo}</td>
          <td>{expense.description}</td>
          <td>{expense.amount.toLocaleString()} VND</td>
          <td>{runningTotal.toLocaleString()} VND</td>
          <td>
            {expense.category}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default ExpenseItem;