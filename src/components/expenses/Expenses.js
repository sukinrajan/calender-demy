import ExpenseItem from './ExpenseItem'
import Cards from '../ui/card'
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter'
import React from 'react';




function Expenses() {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear =>
    setFilteredYear(selectedYear)


  const expenses = [{ id: 'e1', date: new Date(2023, 8, 22), title: 'Car Insurence', price: 45.05 },
  { id: 'e2', date: new Date(2023, 8, 23), title: 'Home Rent', price: 75.99 },
  { id: 'e3', date: new Date(2023, 8, 28), title: 'Eletricity Bill', price: 22.22 },
  { id: 'e4', date: new Date(2023, 8, 26), title: 'Television Cable', price: 63.24 }]
  return (
    <Cards className='expanse'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenses.map((data) => {
        console.log(data);
        return <ExpenseItem date={data.date} title={data.title} price={data.price} />;
      })}

      {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].price} />
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].price} />
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].price} />
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].price} /> */}

      {/* <ExpenseItem expenses={expenses[0]}></ExpenseItem>  Another Way */}
    </Cards>

  );
}

export { Expenses }
