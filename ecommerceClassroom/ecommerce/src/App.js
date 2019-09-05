import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import ProductList from './components/productList';
import Details from './components/details';
import Cart from './components/cart';
import NoPage from './components/404';
import Modal from './components/modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={NoPage}/>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
