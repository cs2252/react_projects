import React,{useState ,useEffect} from 'react'

function HookMouse() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMousePosition=e=>{
        console.log("logMousePositon called")
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)
        // console.log("after addEvenetListner called")
        return ()=>{
            console.log("cleanup code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
           HOOks X-{X} Y-{Y} 
        </div>
    )
}

export default HookMouse
