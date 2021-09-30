import React,{useState} from 'react'
import carts from '../data'
import Cartss from './Cartss'
// cler all items btn function
function CartContiner({setAmount}) {
const [cart,setCarte]=useState(carts);
const [items,setItems]=useState();

const handel = ()=>{
    setCarte([]);
}
//remove item btn function
const removeItem = (id)=>{
    let newCart = cart.filter((i)=>i.id !== id)
     setCarte(newCart)
    
    
}
//totall items & totall price function
let {totalItems,totalPrice}=cart.reduce((total,prodact)=>{
    const {amount,price}=prodact;
    total.totalItems += amount;
    total.totalPrice += amount * price
    
    return total
    
},{
    totalItems:0,
    totalPrice:0
});
totalPrice = parseFloat(totalPrice).toFixed(3)
setAmount(totalItems);
//console.log(totalItems);
//console.log(totalPrice);
//add items to the cart
const addItems = (id)=>{
    let icres=cart.map((i)=>{
        if(i.id === id){
            //console.log({...i,amount:i.amount+1});
            return {...i,amount:i.amount+1};
        //return setCarte({amount:i.amount+1}) 
                    
        
        }
        return i
        
    })
    return setCarte(icres)
    
    
        
}
//remove items to the cart
const removeItems = (id)=>{
    let decrice=cart.map((i)=>{
        if(i.id === id){
            //console.log({...i,amount:i.amount+1});
            return {...i,amount:i.amount-1};
        //return setCarte({amount:i.amount+1}) 
                    
        
        }
        return i
        
    }).filter((i)=>i.amount !== 0)
    return setCarte(decrice)
    
    
        
}

//console.log(cart);
if (cart.length === 0) {
    return <h1 className='noItems'>ther is no items</h1>
}
    return (
        <div className="main-continer">
            <h1>YOUR BAG</h1>
          {cart.map((item)=>{
              return <Cartss key={item.id} {...item} removeItem ={removeItem } addItems={addItems} removeItems ={removeItems }items={items}/>
          })} 
          <footer className="footer">
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn' onClick={handel}
        >
          clear cart
        </button>
      </footer> 
        </div>
    )
}

export default CartContiner
