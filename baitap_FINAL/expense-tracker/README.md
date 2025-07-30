
# 🌿 Final Project – Web Programming Class | Green Summer Campaign 2025

Welcome to the final project of the **Web Programming class** from the **Mùa Hè Xanh 2025 Campaign**! 🚀  
This is **Expense Tracker**, a modern web app to help you manage your daily expenses with ease. 💸

---

## 📌 Features

- ✅ Add, Edit & Delete Expenses  
- ✅ Store expenses locally using IndexedDB  
- ✅ Interactive chart visualization of spending  
- ✅ Calculate and display total expense summary  
- ✅ Categorize by payment method, category & recipient  
- ✅ Responsive layout for desktop and mobile  

---

## 🧩 Technologies Used

- ⚛️ ReactJS
- 📦 IndexedDB (via idb)
- 📊 Recharts
- 🎨 CSS (custom styles)
- 🧱 Modular React component architecture

---

## 🖥️ Live Preview

> [_Click the web to check it out._](http://localhost:3000/)

---

## 🚀 Getting Started

### 1. Clone this repository
```bash
git clone https://github.com/NguyenLeThanhHien/MHX2025_LapTrinhWeb.git
cd MHX2025_LapTrinhWeb/baitap_FINAL/expense-tracker
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the app
```bash
npm start
Visit http://localhost:3000 to open the app in your browser.
```

## 🧠 How It Works
When the app loads, it connects to the browser’s IndexedDB to retrieve previously stored expenses.

Each expense includes:

* Date of transaction
* Payment method (e.g., Cash, Card)
* Recipient / Payee
* Description
* Amount
* Category

All data is saved locally — no server needed.

A dynamic bar chart visualizes spending.

Edit or delete any transaction at any time.

## 📂 Project Structure
```bash
expense-tracker/
├── components/
│   ├── ExpenseForm.js        # Form to add new expenses
│   ├── ExpenseList.js        # Displays list of expenses
│   ├── TotalExpenses.js      # Shows total spending
│   └── ExpenseChart.js       # Recharts-based chart component
├── App.js                    # Root component
├── App.css                   # Styling
└── index.js                  # Entry point
```

🎨 Planned Improvements

The current design is functional but simple. Here's a preview of the upcoming Dark Mode UI redesign:

## Planned UI upgrades:
- 🌘 Dark mode interface
- 📱 Better spacing and mobile responsiveness
- ✨ Animated transitions and effects
- 💡 Tooltips & filtering by category


* 🧑‍💻 Developed By
* 👨‍💻 **Nguyễn Lê Thành Hiển**
* 📚 Web Programming – UIT x Mùa Hè Xanh 2025

## 📜 License
This project is open-source and intended for educational use only.
Feel free to reuse with credit.

Thank you for checking out this project! 🌱
Happy Coding! ✨