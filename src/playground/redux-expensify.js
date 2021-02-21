import {createStore, combineReducers} from 'redux';
import { v4 as uuid_v4 } from "uuid";

// ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid_v4(),
        description,
        amount, 
        note,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ({id} = { }) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// SET_TEXT_FILTER 
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SET_START_DATE
const setStartDate = (startDate) =>({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE 
const setEndDate = (endDate) =>({
    type: 'SET_END_DATE',
    endDate
})

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });

        default:
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT': 
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE': 
            return {
                ...state, 
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
            return {
                ...state, 
                endDate: action.endDate
            }
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate
        const textMatch = expense.description.includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=> {
        if(sortBy === 'date'){
            return a.createAt > b.createAt? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount > b.amount? 1 : -1;
        }        
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'rent', createdAt: -10000, date: -3848484, note: 'last month rent'}))
const expenseTwo = store.dispatch(addExpense({description: 'uhaul', createdAt: -21000, date: -3000, note: 'Grand Concourse'}))
// const expenseThree = store.dispatch(addExpense({description: 'Flight Ticket', amount: 899, note:'Air France'}))

// store.dispatch(addExpense({description: 'Gas bill', amount: 340, createdAt: -108800, date: -348733, note:'coned bill'}));
// store.dispatch(addExpense({description: 'Water Bill', amount: 893, createdAt: -438800, date: -190000, note:'Water bill from Amz'}));
// store.dispatch(setTextFilter('another'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses)

//console.log(expenseOne)
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(removeExpense({id: expenseThree.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { note: 'san Francisco'}));
// store.dispatch(setTextFilter('bike'));
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(1342));
// store.dispatch(setEndDate(87586));


const demoState = {
    expenses: [{
        id: 'djglkjslde',
        description: 'Jan rent',
        note: 'this was the final payment of the rent',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or amount
        startDate: undefined,
        endDate: undefined
    }
}
// export default demoState;