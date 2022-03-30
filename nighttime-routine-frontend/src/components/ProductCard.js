import React from 'react'

function ProductCard({ product, onProductClick }) {

function addToWishlistTEST(newProduct) {
    fetch ('http://localhost:9292/wishlist_items', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({product_id: newProduct.id}),
    })
        // .then(console.log(product))
        .then(response => response.json())
        .then(onProductClick(product))
    }

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
                onClick={() => addToWishlistTEST(product)}
                >Add to wishlist</button> 
            </div>
        </div>
    )
}

export default ProductCard