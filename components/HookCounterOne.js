import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const initialState=0
    const [count, setCount] = useState(initialState)
    const [name, setName] = useState("")
    useEffect(()=>{
        console.log("updating counter value")
        document.title=`you clicked ${count} times`
    },[count])
    const increment=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/>
            <button onClick={increment}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
