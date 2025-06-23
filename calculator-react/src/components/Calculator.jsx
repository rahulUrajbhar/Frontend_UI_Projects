import "./calculator.css"
import { useState } from "react"
const Calculator = ()=>{
    
    const [output,setOutput]=useState("")
return(
    <div className="root-container">
        <input type="test" id="display" value={output} readOnly/>
        <div className="btnContainer">
            <button className="btn" value="/" onClick={e => setOutput(output + e.target.value)}>/</button>
            <button className="btn" value="1" onClick={e => setOutput(output + e.target.value)}>1</button>
            <button className="btn" value="2" onClick={e => setOutput(output + e.target.value)}>2</button>
            <button className="btn" value="3" onClick={e => setOutput(output + e.target.value)}>3</button>
            <button className="btn" value="+" onClick={e => setOutput(output + e.target.value)}>+</button>
            <button className="btn" value="4" onClick={e => setOutput(output + e.target.value)}>4</button>
            <button className="btn" value="5" onClick={e => setOutput(output + e.target.value)}>5</button>
            <button className="btn" value="6" onClick={e => setOutput(output + e.target.value)}>6</button>
            <button className="btn" value="-" onClick={e => setOutput(output + e.target.value)}>-</button>
            <button className="btn" value="7" onClick={e => setOutput(output + e.target.value)}>7</button>
            <button className="btn" value="8" onClick={e => setOutput(output + e.target.value)}>8</button>
            <button className="btn" value="9" onClick={e => setOutput(output + e.target.value)}>9</button>
            <button className="btn" value="*" onClick={e => setOutput(output + e.target.value)}>*</button>
            <button className="btn" value="." onClick={e => setOutput(output + e.target.value)}>.</button>
            <button className="btn" value="0" onClick={e => setOutput(output + e.target.value)}>0</button>
            <button className="btn" value="00" onClick={e => setOutput(output + e.target.value)}>00</button>
            <button className="btn" onClick={e => setOutput("")}>Clear</button>
            <button className="btn" onClick={e => setOutput(output.slice(0,-1))}>AC</button>
            <button className="btn" onClick={e => setOutput(eval(output))}>=</button> 
        </div>
    </div>
)
}

export default Calculator