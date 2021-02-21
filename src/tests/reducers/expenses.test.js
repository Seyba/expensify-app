import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('Should not remove expense by id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('Should add expense', () => {
    const expenseData = {
        description: 'mango',
        createAt: 345989344,
        amount: 234,
        id: '5',
        note: 'mango juice'
    }
    const action = {
        type: 'ADD_EXPENSE',
        expenseData
    } 
        
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2], expenses[3]]) // .toEqual([...expenses, expenseData])
})

test('Should edit expense', () => {
    const amount = 23;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {amount}
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toBe(amount)
})

test(`Should not edit expense if it does'nt exist`, () => {
    const amount = 23;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {amount}
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})