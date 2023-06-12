import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { useState } from 'react';
function App() {

  var [transactionList, setTransactionList] = useState([{ id: '1', text: "Pay", amount: -900 }]);
  function addTransactionDetails(id, text, amount) {
    setTransactionList(oldList => [...oldList, { id: id, text: text, amount: amount }])
  }
  function deleteTransaction(id) {
    setTransactionList(transactionList = transactionList.filter(item => item.id !== id))
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="container">
        <Balance transactionList={transactionList} />
        <IncomeExpense transactionList={transactionList} />
        <History transactionList={transactionList} deleteTransaction={deleteTransaction} />
        <AddTransaction addTransactionDetails={addTransactionDetails} />
      </div>
    </div>
  );
}

export default App;
