import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../ui/card';
import React from 'react';


export default function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/> 
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </div>
        </Card>
    );
}