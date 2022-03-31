import React from 'react'

function WishlistCard({ wishlistItem, onRemoveFromWishlist }) {
    
    function handleDelete() {
        onRemoveFromWishlist(wishlistItem);
    }

    return (
        <div className="ui link card">
        <div className="card">
            <div className="header">
            <div className="ui horizontal divider">
                <h4>{wishlistItem.product.brand}</h4>
            </div>
            <div className="ui inverted divider"></div>
            <div className="content">
                <h5>{wishlistItem.product.name}</h5>
                <h5>Good for: {wishlistItem.product.concerns}</h5>
                <button
                className="ui red basic button"
                onClick = {() =>  handleDelete()}
                ><i className="trash icon"></i>Remove from Wishlist</button>
            </div>
        </div>
        </div>
        </div>
    )
} 


export default WishlistCard