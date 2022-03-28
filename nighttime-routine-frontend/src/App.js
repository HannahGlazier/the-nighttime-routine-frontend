import React from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Wishlist from './components/Wishlist'
import AddProduct from './components/AddProduct'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <NavBar />
        <Switch>
          <Route exact path='/products' >
            <ProductList />
          </Route>
          <Route exact path='/wishlist' >
            <Wishlist />
          </Route>
          <Route exact path='/addProduct' >
            <AddProduct />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
