import React, { useState } from 'react';
import Counter from './Counter'


function App() {
    
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1>Hello world</h1>
            <p>Welcome to your web app!</p>

            <Counter count={count} setCount={setCount}/>
            {/* <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button> */}
        </div>
    )
}

export default App 


// TO DO: test how react-redux gets count to persist after reload, then try to figure out a way to do it with react hooks