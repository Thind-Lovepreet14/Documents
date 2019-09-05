import React, { Component } from 'react';
import Title from "../title";
import EmptyCart from "./emptyCart";
import {ProductConsumer} from '../../context';
import CartList from './cartList';
import CartTotal from './cartTotal';

export default class Cart extends Component {
  render() {
    return(
        <React.Fragment>
          <ProductConsumer>
            {value =>{
              const {cart} =value;
              if(cart.length>0){
                return(
                  <div className="container">
                  <Title name="Your" title="Cart"/>
                  <CartList value={value}/>
                    <CartTotal value={value}
                      history ={this.props.history}
                      />
                </div>
                );
              }else{
                return(
                  <EmptyCart/>
                )
              }
            }}
          </ProductConsumer>

        </React.Fragment>
    )
  }
}
