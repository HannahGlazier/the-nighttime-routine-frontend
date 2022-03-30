import React from 'react'
import WishlistCard from './WishlistCard'
// import ProductCard from './ProductCard'

function Wishlist({ wishlistItems, setWishlistItems,  onRemoveFromWishlist }) {
  // const firstMap = wishlistItems.map(item => item.product)
  // console.log(firstMap)
  const wishlistMap = wishlistItems.map(wishlistItem => (
    // console.log(wishlistItem.product.brand)
    <WishlistCard
      key={wishlistItem.id}
      wishlistItem={wishlistItem}
      setWishlistItems={setWishlistItems}
      onRemoveFromWishlist={ onRemoveFromWishlist}
    />
    
  )) 

  
  return (
    <div>{wishlistMap}</div>
  )
}

export default Wishlist