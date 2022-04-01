import React from 'react'

function WishlistCard({ price, wishlistItems, wishlistItem, onRemoveFromWishlist }) {
    
    function handleDelete() {
        onRemoveFromWishlist(wishlistItem);
    }

    const priceMap = wishlistItems.map(item => item.product.price)
    // let sum = 0
    // priceMap.forEach(x => {
    //     sum += x;
    // })
    
    let sum = priceMap.reduce(function (x, y) {
        return x + y;
    }, 0)



    return (
        <div>
        Total Cost: {sum}
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
                <div
                className="ui bottom attached red basic button"
                onClick = {() =>  handleDelete()}
                ><i className="trash icon"></i>Remove from Wishlist</div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
} 


export default WishlistCard