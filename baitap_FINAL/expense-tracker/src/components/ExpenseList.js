import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <ul id="expenses-list" className="bg-white rounded shadow">
      {expenses.length === 0 ? (
        <li className="p-2 text-center text-gray-500">No expenses yet.</li>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        ))
      )}
    </ul>
  );
}

export default ExpenseList;