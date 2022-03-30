import React from 'react'
// import WishlistCard from './WishlistCard'
import ProductCard from './ProductCard'

function Wishlist({ wishlistItems, setWishlistItems }) {
  const wishlistMap = wishlistItems.map(product => (
    <ProductCard
      key={product.id + product.name}
      product={product}
      setWishlistItems={setWishlistItems}
    />
  )) 

  return (
    <div>{wishlistMap}</div>
  )
}

export default Wishlist