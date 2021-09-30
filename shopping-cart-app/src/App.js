
import React,{useState} from 'react'
import './index.css';
import Nav from './componet/Nav'
import CartContiner from './componet/CartContiner';

function App() {
  const [amount,setAmount]=useState(0)
  return (
    <div className="App">
      
      <Nav amount={amount}/>
      <CartContiner setAmount={setAmount}/>
    </div>
  );
}

export default App;
