import React from 'react'
import WishlistCard from './WishlistCard'

function Wishlist({ wishlistItems, setWishlistItems,  onRemoveFromWishlist }) {

  const priceMap = wishlistItems.map(item => item.product.price)
  let sum = priceMap.reduce(function (x, y) {
    return x + y;
}, 0)

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
    <div className="wishlist">
      <div className="ui five cards">{wishlistMap}</div>
      <div className="ui right aligned header">Total Cost ${sum}</div>
    </div>
  )
}

export default Wishlist