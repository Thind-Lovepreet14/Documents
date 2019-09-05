import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
  render() {
    return(
      <ProductConsumer>
        {value => {
          const {id,company,img,info,price,title,inCart} =value.detailProduct;
          return(
            <div className="card mx-auto col-md-10 my-4" style={{width: "100%",paddingTop:"3.0rem"}}>
              <Link to="/" className="card-title text-left"><i className="fas fa-angle-double-left"> </i> Back</Link>
              <h2 className="card-title text-center">
                  {title}
              </h2>
              <hr/>
              <div className="card-body">
                <div className="row">
                <div className="col-md-6">
                  <img src={img} className="card-img-top img-responsive" alt={title}/>
                </div>
                <div className="col-md-6">
                  <p className="card-text h-50 ">{info}</p>
                  <hr/>
                    <p className="card-text alert alert-success" role="alert"> Brand : <span className="text-capitalize h5"> {company}</span></p>
                  <hr/>
                    <p className="card-text alert alert-primary" role="alert"> Price : <span className="text-capitalize h5"> <i className="fas fa-dollar-sign"></i> {price}</span></p>
                  <hr/>
                <div className="clearfix">
                  <Link to="/cart"> <button className="btn btn-success float-left" onClick={() =>{inCart?console.log('yo'):value.addToCart(id)}}>
                    <i className="fas fa-money-bill-alt"></i> Buy </button>
                  </Link>

                    <button className="btn btn-info float-right" disabled={inCart?true:false} onClick={() =>{
                        value.addToCart(id);
                      }}><i className="fas fa-shopping-bag"></i> {inCart?'In ':'Add to '} Cart </button>
                </div>
                </div>
              </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    )
  }
}
