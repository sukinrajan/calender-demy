import './NewExpenses.css'
import ExpansesForm from './ExpensesForm'

const NewExpanses = (props)=>{
   const saveEnteredExpances = (enteredData) => {
const ExpanseData = {
   ...enteredData,
   id: Math.random().toString()
}
props.addExpenses(ExpanseData)
   }
 return  (
<div className='new-expense'>
   <ExpansesForm saveExpances={saveEnteredExpances}/>
</div>
 ) ;
}

export default NewExpanses;