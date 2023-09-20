import './App.css';
import {Expenses} from './components/expenses/Expenses'
import NewExpanses from './components/newExpenses/NewExpenses';
import React from 'react';

function App() {
const onSaveExpanses = (data) => {
console.log(data)
}
  return (
    <div className="App">
      <NewExpanses addExpenses = {onSaveExpanses}/>
      <Expenses/>
    </div>

  );
}

export default App; 
