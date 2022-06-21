import { useState } from "react"


function App() {

    let [count, updatecount] = useState(0)
   
    console.log(count,updatecount)

    return (
        <>
            <h1>Counter</h1>
            <h2>Count:{count}</h2>
            <button onClick={() => { updatecount(count + 1) }}>Increment+</button>
            <button onClick={() => { updatecount(count - 1) }}>Decrement-</button>
            <button onClick={() => { updatecount(count =0) }}>Reset</button>
        </>
    )
}

export default App