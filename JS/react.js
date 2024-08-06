import { useState } from 'react';
import './App.css'

function App(){

    const [counter,setCounter]=useState(0)
    const [name,setName]=useState("sevenmentor")

    function minus()
    {
    if(counter>0)
    {
        setCounter(counter-1)
     }
    }
    function chngname(){

            setName("I.T. Education")
    }
    return (
        <div className="App">
            <h1>UseState Hook</h1>
            <h2>Counter: {counter}</h2>
            <h3>{name}</h3>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>minus()}>Decrement</button><br></br>
            <button onClick={()=>chngname()}>Change Name</button>

        </div>
    );
}