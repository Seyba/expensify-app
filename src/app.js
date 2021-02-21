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

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))