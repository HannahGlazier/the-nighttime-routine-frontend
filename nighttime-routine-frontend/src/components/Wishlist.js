import React from 'react'
import WishlistCard from './WishlistCard'
// import ProductCard from './ProductCard'

function Wishlist({ wishlistItems, setWishlistItems,  onRemoveFromWishlist }) {

  const priceMap = wishlistItems.map(item => item.product.price)


  

  const wishlistMap = wishlistItems.map(wishlistItem => (
    <WishlistCard
      key={wishlistItem.id}
      wishlistItem={wishlistItem}
      wishlistItems={wishlistItems}
      setWishlistItems={setWishlistItems}
      onRemoveFromWishlist={ onRemoveFromWishlist}
      price = {wishlistItem.product.price}
    />
    
  )) 
  
  
  return (
    <div className="ui five cards">{wishlistMap}</div>
  )
}

export default Wishlist