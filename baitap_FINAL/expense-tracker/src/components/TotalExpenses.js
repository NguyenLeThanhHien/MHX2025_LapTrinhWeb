import React from 'react';

// Component to display total expenses
function TotalExpenses({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="total">
      Total to Date: {total.toLocaleString()} VND
    </div>
  );
}

export default TotalExpenses;