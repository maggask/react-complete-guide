import React, { useState, useEffect } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filteredExpenses, setFilteredExpenses] = useState([...expenses]);

    const filterChangeHandler = (selectedFilter) => {
        setFilteredYear(selectedFilter);
    }

    useEffect(() => {
        setFilteredExpenses(expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear));
    }, [expenses, filteredYear])

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;