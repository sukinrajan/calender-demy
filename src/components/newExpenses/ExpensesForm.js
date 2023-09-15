import { useState } from 'react';
import './ExpensesForm.css'

const ExpensesForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const submitHandler = (event) => {
event.preventDefault();

        const expenceData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        }
        
        props.saveExpances(expenceData)

        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2020-01-01' max='2022-12-31' onChange={dateHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='.01' step='.01' onChange={amountHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expenses</button>
            </div>
        </form>
    );
}

export default ExpensesForm;