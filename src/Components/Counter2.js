import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    const stateCopy = { ...state }

    switch (action.type) {
        case 'increment1':
            stateCopy.firstCounter = stateCopy.firstCounter + action.payload
            return stateCopy

        case 'decrement1':
            stateCopy.firstCounter = stateCopy.firstCounter - action.payload
            return stateCopy

        case 'reset1':
            stateCopy.firstCounter = initialState.firstCounter
            return stateCopy

        case 'increment2':
            stateCopy.count = stateCopy.count + action.payload
            return stateCopy

        case 'decrement2':
            stateCopy.count = stateCopy.count - action.payload
            return stateCopy

        case 'reset2':
            stateCopy.secondCounter = initialState.secondCounter
            return stateCopy
        default: return state

    }
}

function Counter2() {

    const [state, dispatch] = useReducer(reducer, initialState);
    return <div>
        <p>state : {state.firstCounter}</p>
        <button onClick={() => {
            dispatch({
                type: 'increment1',
                payload: 10
            })
        }}>increment</button>

        <button onClick={() => {
            dispatch({
                type: 'decrement1',
                payload: 10
            })
        }}>decrement</button>

        <button onClick={() => {
            dispatch({
                type: 'reset1'
            })
        }}>reset</button>
        <br />
        <p>state : {state.secondCounter}</p>
        <button onClick={() => {
            dispatch({
                type: 'increment2',
                payload: 10
            })
        }}>increment</button>

        <button onClick={() => {
            dispatch({
                type: 'decrement2',
                payload: 10
            })
        }}>decrement</button>

        <button onClick={() => {
            dispatch({
                type: 'reset2'
            })
        }}>reset</button>
    </div>;
}

export default Counter2;
