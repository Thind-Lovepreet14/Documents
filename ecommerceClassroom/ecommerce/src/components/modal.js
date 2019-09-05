import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';


export default class Modal extends Component {
  render() {
    return(
      <ProductConsumer>
      {(value) =>{
        const {modalOpen,closeModal} = value;
        const {img,title} = value.modalProduct;

        if(!modalOpen){
          return null;
        }
        else {
          return(
          <div className="card mx-auto text-center shadow-lg p-3 mb-5 bg-white rounded" style={{width: "25rem",position:"fixed",top:"0",left:"0",right:"0",bottom:"12",margin:"150px 0 0 0"}}>
            <h5 className="card-title alert alert-success" role="alert">Added to cart</h5>
            <img src={img} className="card-img-top" alt={title}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <hr/>
              <div className="clearfix">
                <Link to="/cart" className="btn btn-info btn-sm  float-left" onClick={() =>closeModal()} > <i className="fas fa-shopping-bag"></i> Go to Cart</Link>
                <Link to="/" className="btn btn-primary btn-sm float-right" onClick={() =>closeModal()} > <i className="fas fa-store"></i> Continue Shopping</Link>
              </div>
            </div>
          </div>
        );
        }
      }}
      </ProductConsumer>
    )
  }
}
