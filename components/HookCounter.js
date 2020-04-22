import React,{useState} from 'react'

function HookCounter() {
    // const [state, setstate] = useState(0)
    const [state1, setstate1] = useState(0);
    
    
    const incrementFive=()=>{
        for(var i=0;i<5;i++)
            setstate1(prevState=>prevState+1)
    }
    return (
        <div>
            <button >count {state1}</button>
    <h2>
    <button onClick={()=>setstate1(prevState=>prevState+1)}>increment </button>
    <button onClick={()=>setstate1(prevState=>prevState-1)}>decrement </button>
    <button onClick={()=>setstate1(0)}>reset </button>
    <button onClick={incrementFive}> increment5</button>
    </h2>
        </div>
    )
}

export default HookCounter
