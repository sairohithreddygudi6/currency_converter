
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [amount, setAmount]=useState('');
  const [result, setResult]=useState(null);

  const convert= async()=>{
    const res=await axios.post('http://localhost:4000/convert',
      {
        amt: parseFloat(amount),
      });
    setResult(res.data);

  }
  
  return (
    <div class='container1'>
      <h1>Let's Convert Money ₹</h1>
      <h3>Enter amount in INR</h3><br></br>
      <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter in INR" /><br></br>
      <button  onClick={convert} >Convert</button>
      { result &&  (
        <> 
        <p>USD : $ {result.usd}</p>
        <p>EUR : € {result.eur}</p>
       
        </>
    )} 
   
    </div>
   
    );
}

export default App;
