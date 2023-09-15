import './App.css';
import {Expenses} from './components/expenses/Expenses'
import NewExpanses from './components/newExpenses/NewExpenses';

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
