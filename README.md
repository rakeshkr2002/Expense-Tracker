# Expense Tracker Application

A modern, feature-rich **Expense Tracker** application designed with React. This app lets you track expenses, manage your wallet balance, and visualize spending patterns effectively using charts and a clean, intuitive interface.

---

## Features

- **Add Expenses**:
  - Record expenses with details like title, date, category, and amount.
  - Categories include *Food*, *Entertainment*, and *Travel*.

- **Manage Wallet**:
  - Track and display the current wallet balance.
  - Add income to the wallet through a user-friendly modal.

- **Transaction List**:
  - View recent transactions with details including category icons and amounts.
  - Edit or delete existing transactions directly.

- **Data Visualization**:
  - **Pie Chart**: Categorized expense overview with custom colors for each category.
  - **Bar Chart**: Vertical layout displaying top expenses by category.

- **Pagination**:
  - Transaction list supports paginated navigation, displaying a fixed number of items per page.

---

## Demo

for demo go to this link
https://expense-tracker-beta-rose.vercel.app/

---

## Installation

Follow these steps to set up and run the app locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

4. The app will open at `http://localhost:3000`.

---

## Code Highlights

- **Global State Management**:
  - Using `Context API` to manage expenses, balance, and transaction entries across components.

- **Responsive Modals**:
  - Integrated `react-modal` for adding and editing expenses and income.

- **Interactive UI**:
  - Dynamic charts and icons powered by `Recharts` and `react-icons`.

---

## Project Structure

```plaintext
src
├── components
│   ├── Dashboard.js        // Main dashboard view
│   ├── Wallet.js           // Wallet balance and income functionality
│   ├── ChartTop.js         // Pie chart for expenses
│   ├── Expense.js          // Add expense component
│   ├── RecTransactions.js  // Transaction list with pagination
│   └── TopExpenses.js      // Bar chart for expense data
├── contextApi
│   └── Contexts.js         // Context API implementation
├── modals
│   ├── AddExpense.js       // Modal for adding expenses
│   ├── EditExpense.js      // Modal for editing expenses
│   └── AddBalance.js       // Modal for adding balance
├── App.js                  // Entry point of the app
```

---

## Technologies Used

- **Frontend**: React.js
- **State Management**: Context API
- **Styling**: CSS
- **Charting Library**: Recharts
- **Icons**: React Icons
- **Modals**: React Modal

---

## How to Use

1. **Add Expenses**:
   - Click on the **+ Add Expense** button.
   - Fill in the details like title, category, amount, and date, and save.

2. **Update Balance**:
   - Add income to the wallet by clicking on **+ Add Income**.

3. **View and Edit Transactions**:
   - Transactions are listed with pagination.
   - Use the edit and delete buttons for managing records.

4. **Visualize Spending**:
   - Analyze expenses through a pie chart and bar chart for category-wise insights.

---


## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use it as needed.

