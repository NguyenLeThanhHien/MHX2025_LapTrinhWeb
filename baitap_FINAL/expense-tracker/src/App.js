import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

let db;

const connectIDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('expense_tracker_db', 1);

    request.addEventListener('upgradeneeded', (e) => {
      db = e.target.result;
      const objectStore = db.createObjectStore('expenses_data', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('description', 'description', { unique: false });
      objectStore.createIndex('amount', 'amount', { unique: false });
      objectStore.createIndex('date', 'date', { unique: false });
      objectStore.createIndex('method', 'method', { unique: false });
      objectStore.createIndex('paidTo', 'paidTo', { unique: false });
      objectStore.createIndex('category', 'category', { unique: false });
    });

    request.addEventListener('error', (e) => {
      console.log('IndexedDB error:', e.target.errorCode);
      reject(e.target.errorCode);
    });

    request.addEventListener('success', () => {
      db = request.result;
      resolve(db);
    });
  });
};

const addExpense = (expense, callback) => {
  const transaction = db.transaction(['expenses_data'], 'readwrite');
  const objectStore = transaction.objectStore('expenses_data');
  const newRecord = {
    date: expense.date,
    method: expense.method,
    paidTo: expense.paidTo,
    description: expense.description,
    amount: expense.amount,
    category: expense.category,
  };
  const request = objectStore.add(newRecord);

  request.addEventListener('success', () => {
    if (callback) callback();
  });

  transaction.addEventListener('error', () => {
    console.log('Transaction error');
  });
};

const getExpenses = (setExpenses) => {
  const transaction = db.transaction(['expenses_data']);
  const objectStore = transaction.objectStore('expenses_data');
  const expenses = [];

  objectStore.openCursor().addEventListener('success', (e) => {
    const cursor = e.target.result;
    if (cursor) {
      expenses.push(cursor.value);
      cursor.continue();
    } else {
      setExpenses(expenses); // Update state with all expenses
    }
  });
};

const deleteExpense = (id, callback) => {
  const transaction = db.transaction(['expenses_data'], 'readwrite');
  const objectStore = transaction.objectStore('expenses_data');
  objectStore.delete(id);

  transaction.addEventListener('complete', () => {
    if (callback) callback();
  });

  transaction.addEventListener('error', () => {
    console.log('Delete transaction error');
  });
};

function App() {
  const [expenses, setLocalExpenses] = useState([]);

  useEffect(() => {
    connectIDB().then(() => {
      getExpenses(setLocalExpenses);
    }).catch((error) => {
      console.error('Connection failed:', error);
    });
  }, []);

  const handleAddExpense = (expense) => {
    addExpense(expense, () => getExpenses(setLocalExpenses));
  };

  const handleDeleteExpense = (id) => {
    deleteExpense(id, () => getExpenses(setLocalExpenses));
  };

  const handleEditExpense = (updatedExpense) => {
    deleteExpense(updatedExpense.id, () => {
      addExpense(updatedExpense, () => getExpenses(setLocalExpenses));
    });
  };

  return (
    <div className="container">
      <h1 className="title">Expense Tracker</h1>
      <ExpenseForm addExpense={handleAddExpense} />
      <TotalExpenses expenses={expenses} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        deleteExpense={handleDeleteExpense}
        editExpense={handleEditExpense}
      />
    </div>
  );
}

export default App;