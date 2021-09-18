import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = ({items}) => {
    return (
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
    )
}

export default Expenses;