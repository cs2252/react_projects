import React,{useState} from 'react'

function HookCounter() {
    const [state, setstate] = useState(0)
    
    return (
        <div>
            <button onClick={()=>setstate(state+1)}>count {state}</button>
        </div>
    )
}

export default HookCounter
