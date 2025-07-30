import React from 'react';

// Component to display total expenses
function TotalExpenses({ expenses }) {
  // Calculate total expenses
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="mb-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">
        Total Expenses: {total.toLocaleString()} VND
      </h2>
    </div>
  );
}

export default TotalExpenses;