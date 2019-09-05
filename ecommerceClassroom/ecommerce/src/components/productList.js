import React, { Component } from 'react';
import Product from './product';
import Title from './title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {

  render() {
    return(
      <React.Fragment>
        <Title name="Road to Hire" title="Cool eCommerce Site"/>

     <div className="row">
      <ProductConsumer>
        {value=>{
          return value.products.map(product =>{
            return <Product key={product.id} product={product}/>
          });
        }}

      </ProductConsumer>
    </div>

      </React.Fragment>
    )
  }
}
