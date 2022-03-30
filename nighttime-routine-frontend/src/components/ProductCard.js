import React from 'react'

function ProductCard({ product, onProductClick }) {


    // function addToWishlistTEST(){
    // fetch ('http://localhost:9292/wishlist_items', { 
    //     method: 'POST',
    //     header: {
    //         'content-type': 'application/json'
    //     }, 
    //     body: JSON.stringify(product)
    //     })
    //   // .then(console.log(product))
    //     .then(setWishlistItems(product))
    // }

    return (
        <div className="ui link card">
            <div className="card">
                <div className="header">
                    <h4>{product.brand}</h4>
                </div>
                <div className="content">
                    <h5>{product.name}</h5>
                    <h5>Good for: {product.concerns}</h5>
                </div>
                <button 
                className="ui button"
                onClick={(e) => onProductClick(e, product)}
                >Add to wishlist</button> 
            </div>
        </div>
    )
}

export default ProductCard