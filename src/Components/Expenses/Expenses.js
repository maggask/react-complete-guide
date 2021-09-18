import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({items}) => {
    const [expensesFilter, setExpensesFilter] = useState('');

    const selectExpenseFilter = (selectedFilter) => {
        setExpensesFilter(selectedFilter);
    }

    return (
        <div>
            <ExpensesFilter selected={expensesFilter} onSelectExpensesFilter={selectExpenseFilter}/>
            <Card className='expenses'>
                {items.map((item, index) => {
                    return (
                        <ExpenseItem 
                        key={item + index}
                        title={item.title} 
                        amount={item.amount} 
                        date={item.date}/>
                    );
                })}
            </Card>
        </div>
    )
}

export default Expenses;