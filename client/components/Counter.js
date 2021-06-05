import React, { useState, useEffect } from 'react'


function Counter() {
    
    const [count, setCount] = useState(0)

    // useEffect + localStorage makes state persist after refresh
    useEffect(() => {
        if (count > 0){
            window.localStorage.setItem("count", `${count}`)
        }
        setCount(JSON.parse(window.localStorage.getItem("count")))
    }, [count])

    return (
        <div>
            <h1>{count ? count : 0}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <button onClick={() => {
                setCount(0)
                window.localStorage.removeItem("count")
            }}>Clear</button>
        </div>
    )
}

export default Counter 