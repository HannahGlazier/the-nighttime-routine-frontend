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

//   function handleAddNewProduct(newProduct){
//     const newProductsList = [...products, newProduct]

//     fetch ('http://localhost:9292/products', { 
//       method: 'POST',
//       header: {
//         'Content-Type': 'application/json'
//       }, 
//       body: JSON.stringify(newProductsList)
//     })
//       .then(response => response.json())
//       .then(setProducts(newProductsList))
// }

  function handleAddNewProduct(newProduct){
    setProducts([...products, newProduct])
  }

  function handleAddToWishlist( product){
    if(!wishlistItems.includes(product)){
      setWishlistItems([...wishlistItems, product])
    }
    // fetch ('http://localhost:9292/wishlist_items', { 
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/json',
    //   }, 
    //   body: JSON.stringify(product),
    // })
    // // .then(console.log(product))
    // .then(response => response.json())
    // // .then(setWishlistItems(product))
  }

  function handleRemoveFromWishlist(product) {
    fetch(`http://localhost:9292/wishlist_items/${product.id}`, {method: 'DELETE'})
    const newWishList = wishlistItems.filter
  }


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