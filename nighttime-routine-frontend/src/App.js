import React, {useState, useEffect}from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Wishlist from './components/Wishlist'
import AddProduct from './components/AddProduct'
import ProductDetailCard from './components/ProductDetailCard'
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

  function handleAddToWishlist( wishlistItem){
    if(!wishlistItems.includes(wishlistItem)){
      setWishlistItems([...wishlistItems, wishlistItem])
      console.log(wishlistItem)
    }
  }

  function handleRemoveFromWishlist(wishlistItem) {
    fetch(`http://localhost:9292/wishlist_items/${wishlistItem.id}`, {method: 'DELETE'})
    const newWishlistItem = wishlistItems.filter(individualProduct => individualProduct !== wishlistItem)
    setWishlistItems(newWishlistItem)
  }


  return (
    <div className="App">
      <Header />
        <NavBar />
        <Switch>
          <Route exact path='/products' >
            <ProductList
              products={products}
              wishlistItems={wishlistItems}
              addToWishlist={handleAddToWishlist}
            />
          </Route>
          <Route exact path='/wishlist_items' >
            <Wishlist
              wishlistItems={wishlistItems}
              // addToWishlist={handleAddToWishlist}
              setWishlistItems={setWishlistItems}
              onRemoveFromWishlist={handleRemoveFromWishlist}
            />
          </Route>
          <Route exact path='/AddProduct'>
            <AddProduct 
              addNewProduct={handleAddNewProduct}
            />
          </Route>
          {/* <Route exact path="/ProductDetailCard" component={ProductDetailCard}>
            <ProductDetailCard products={products}/>
            Ingredients</Route> */}
        </Switch> 
    </div>
  );
}

export default App;