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
  // const [newWishlistItem, setNewWishlistItem] = useState([])

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

  // Handlers

  function handleAddNewProduct(newProduct){
    setProducts([...products, newProduct])
  }

  function handleAddToWishlist(e, product){
    e.stopPropagation()
    if(!wishlistItems.includes(product)){
      setWishlistItems([...wishlistItems, product])
    }}
    // fetch ('http://localhost:9292/wishlist_items', { 
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/json'
    //   }, 
    //   // body: JSON.stringify(product)
    // })
    // // .then(console.log(product))
    // .then(setWishlistItems(product))
  // }

  return (
    <div className="App">
      <Header />
        <NavBar />
        <Switch>
          <Route exact path='/products' >
            <ProductList
              products={products}
              addToWishlist={handleAddToWishlist}
            />
          </Route>
          <Route exact path='/wishlist_items' >
            <Wishlist
              wishlistItems={wishlistItems}
              // addToWishlist={handleAddToWishlist}
              setWishlistItems={setWishlistItems}
            />
          </Route>
          <Route exact path='/AddProduct'>
            <AddProduct 
              addNewProduct={handleAddNewProduct}
            />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
