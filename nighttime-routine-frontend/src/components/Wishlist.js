import React from 'react'
import WishlistCard from './WishlistCard'

function Wishlist({ wishlistItems }) {
  const wishlistMap = wishlistItems.map(wishlistItem => (
    <WishlistCard 
      key={wishlistItem.id}
      wishlistItem={wishlistItem}
    />
  )) 

  return (
    <div>{wishlistMap}</div>
  )
}

export default Wishlist