import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {
            props.expenses.map(expense => <ExpenseListItem key={expense.id}{...expense}/>)
        }
    </div>
)

const mapStateToProps = (state) =>(
    {
        expenses: selectExpenses(state.expenses, state.filters)
    }
)
export default connect(mapStateToProps)(ExpenseList);