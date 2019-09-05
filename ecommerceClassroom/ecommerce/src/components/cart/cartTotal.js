import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './paypalButton';

export default function CartTotal({value,history}){
  const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
  return(
    <React.Fragment>
      <table className="table table-bordered text-right table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">SubTotal</th>
          <th scope="col">Tax</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/"> <button className="btn btn-danger" onClick={() => clearCart()}> <i className="fas fa-trash-alt"></i> Clear cart</button> </Link>
            </td>
            <td>{cartSubTotal}</td>
            <td>{cartTax}</td>
            <td className="text-success h2"> <i className="fas fa-dollar-sign"></i> {cartTotal}</td>
          </tr>
          <tr>
            <td colSpan="5">
              <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}
