import React, { useState,useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick=()=>{
        setCount(prevCount=>prevCount+1)
        console.log("tick called")
    }
    useEffect(() => {
        const interval=setInterval(tick,1000)
        return () => {
            clearInterval(tick)
        }
    },[])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
