import React, {useState, useEffect}from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Wishlist from './components/Wishlist'
import AddProduct from './components/AddProduct'
import './App.css';

function App() {
  // State
  const [products, setProducts] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])

  // Fetches
  useEffect(() => {
    fetch('http://localhost:9292/products')
    .then(response => response.json())
    .then(products => setProducts(products))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/wishlist_items')
    .then(response => response.json())
    .then(products => setWishlistItems(products))
  }, [])

  return (
    <div className="App">
      <Header />
        <NavBar />
        <Switch>
          <Route exact path='/products' >
            <ProductList
              products={products}
            />
          </Route>
          <Route exact path='/wishlist_items' >
            <Wishlist
              wishlistItems={wishlistItems}
            />
          </Route>
          <Route exact path='/addProduct' >
            <AddProduct />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
