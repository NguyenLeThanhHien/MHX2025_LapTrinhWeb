import React from 'react';
import ExpenseItem from './ExpenseItem';

// Component to display list of expenses
function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date of Payment</th>
          <th>Method of Payment</th>
          <th>Paid To</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Running Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="7">No expenses yet.</td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              expenses={expenses} // Pass expenses prop
              deleteExpense={deleteExpense}
              editExpense={editExpense}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseList;