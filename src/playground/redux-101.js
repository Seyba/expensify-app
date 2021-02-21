import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const store = createStore((state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy: 1;
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
            case 'SET':
                return {
                    count: action.count
                }
        default:
            return state;
    }
})  

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy: 23}));
store.dispatch(decrementCount({decrementBy: 20}));
store.dispatch(incrementCount({incrementBy: 3}));

store.dispatch(setCount({count: 93}));
store.dispatch(resetCount());


// store.dispatch({type:'INCREMENT'})
// store.dispatch({type:'DECREMENT'})
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 11
// })

// store.dispatch({
//     type:'SET',
//     count: 201
// })

//store.dispatch({type:'DECREMENT'})
unsubscribe()
store.dispatch({type:'RESET'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'INCREMENT'})