import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({expenses}) => {
    const [expensesFilter, setExpensesFilter] = useState('');
    const [filteredExpenses, setFilteredExpenses] = useState([...expenses]);

    const selectExpenseFilter = (selectedFilter) => {
        setExpensesFilter(selectedFilter);
    }

    useEffect(() => {
        setFilteredExpenses(expenses.filter((expense) => expense.date.getFullYear().toString() === expensesFilter));
    }, [expenses, expensesFilter])

    return (
        <div>
            <ExpensesFilter selected={expensesFilter} onSelectExpensesFilter={selectExpenseFilter}/>
            <Card className='expenses'>
                {filteredExpenses.length === 0 ? (
                    <p>No expenses found!</p>
                ) : (filteredExpenses.map((expense) => {
                    return (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date}/>
                    );
                }))}
            </Card>
        </div>
    )
}

export default Expenses;