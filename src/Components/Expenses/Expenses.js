import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({filteredExpenses}) => {
    const [expensesFilter, setExpensesFilter] = useState('');

    const selectExpenseFilter = (selectedFilter) => {
        setExpensesFilter(selectedFilter);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={expensesFilter} onSelectExpensesFilter={selectExpenseFilter}/>
                {filteredExpenses.length === 0 ? <p>No expenses found.</p> : 
                filteredExpenses.map((expense, index) => {
                    return (
                        <ExpenseItem 
                        key={expense + index}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}/>
                    );
                })}
            </Card>
        </div>
    )
}

export default Expenses;