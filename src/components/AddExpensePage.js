import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import {startAddExpense} from '../actions/expenses';
import { connect } from 'react-redux';
import { render } from 'enzyme';

class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return(
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
    
}
const mapDispatchToProps = dispatch =>({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage);