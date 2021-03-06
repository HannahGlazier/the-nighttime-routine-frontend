import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="ui secondary pointing menu">
      <NavLink to='/' exact className="item">Home</NavLink>
      <NavLink to='/products' exact className="item">All Products</NavLink>
      <NavLink to='/wishlist_items' exact className="item">Wishlist</NavLink>
      <NavLink to='/AddProduct' exact className="item">Add Product</NavLink>
    </div>
  )
}

export default NavBar