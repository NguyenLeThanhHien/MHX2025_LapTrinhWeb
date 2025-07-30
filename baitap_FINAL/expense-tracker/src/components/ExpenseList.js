import React from 'react';
import ExpenseItem from './ExpenseItem';

// Component to display list of expenses
function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
              editExpense={editExpense}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;