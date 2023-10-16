import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
      ))}
    </ul>
  );
};

export default ExpensesList;
