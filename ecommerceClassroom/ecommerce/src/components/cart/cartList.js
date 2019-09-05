import React from 'react';
import CartItem from './cartItem'

export default function CartList({value}){
  const {cart} = value;
  console.log(value,cart);
  return(
    <React.Fragment>
        <table className="table table-bordered table-hover text-center table-striped ">
          <thead className="bg-light">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
      {cart.map(item=>{
        return <CartItem key={item.id} item={item} value={value}/>;
      })}
      </tbody>
    </table>
  </React.Fragment>
  )

}
