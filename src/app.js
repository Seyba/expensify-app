import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRoute from './routes/AppRoute';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({description: 'Gas bill', amount: 340,  note:'coned bill'}));
store.dispatch(addExpense({description: 'Water Bill', createdAt: 1093, note:'Water bill from Amz'}));
store.dispatch(addExpense({description: 'Rent', amount: 2999, createdAt: 493, note:'amount changed'}));
store.dispatch(addExpense({description: 'Shoe', amount: 78, createdAt: 898, note:'amount changed'}));
store.dispatch(addExpense({description: 'Hat', amount: 140, note:'amount changed'}));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))