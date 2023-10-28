import React, { useState } from 'react';

function InputTodo(){
    const [input, setInput] = useState("");
    const handleClick = (e) => {
        e.preventDefault()
        console.log(input);
        setInput("")
    }
    return (
        <div>
        <form>
        <input type="text" placeholder='input todo' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClick}>Add</button>
        </form>

        </div>
        );  
}
export default InputTodo