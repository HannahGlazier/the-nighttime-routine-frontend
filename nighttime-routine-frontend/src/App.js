import React, {useState, useEffect}from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import Header from './components/Header'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Wishlist from './components/Wishlist'
import AddProduct from './components/AddProduct'
import ProductDetailCard from './components/ProductDetailCard'
import Home from './components/Home'
import './App.css';

function App() {
  // State
  const [products, setProducts] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [ingredients, setIngredients] = useState([])

  let history = useHistory()

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
    }
  }

  function handleRemoveFromWishlist(wishlistItem) {
    fetch(`http://localhost:9292/wishlist_items/${wishlistItem.id}`, {method: 'DELETE'})
    const newWishlistItem = wishlistItems.filter(individualProduct => individualProduct !== wishlistItem)
    setWishlistItems(newWishlistItem)
  }


  function routeChange(product){
    history.push('/ProductDetailCard')
    setIngredients(product)
}

  return (
    <div className="App">
      <Header />
        <NavBar />
        <Switch>
        <Route exact path="/">
          <Home>
            TEsting
          </Home>
          </Route>
          <Route exact path='/products' >
            <ProductList
              products={products}
              wishlistItems={wishlistItems}
              addToWishlist={handleAddToWishlist}
              routeChange={routeChange}
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
          <Route exact path="/ProductDetailCard">
            <ProductDetailCard ingredients={ingredients} setIngredients={setIngredients}/>
          </Route>
        </Switch> 
    </div>
  );
}

export default App;