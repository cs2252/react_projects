import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state=state+1
        case 'decrement':
            return state=state-1
        case 'reset':
            return state=initialState
        default:
            return state
    }
}
function UseReducerCounterOne() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <h2>Count-{count}</h2>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    )
}

export default UseReducerCounterOne
