import React from 'react'

function ProductCard({ product, onProductClick, routeChange }) {


function addToWishlist(newProduct) {
    fetch ('http://localhost:9292/wishlist_items', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({product_id: newProduct.id}),
    })
        .then(response => response.json())
        .then(onProductClick)
    }

    return (
        
        <div className="ui link card">
            <div className="card">
                <div className="ui horizontal divider">
                    <h4>{product.brand}</h4>
                </div>
                <div className="ui inverted divider">
                </div>
                <div className="content">
                    <h5> {product.name} (${product.price})</h5>
                    <h5 className="ui sub header">Treats: {product.concerns}</h5>
                <div onClick={() => routeChange(product)}>
                <i className="flask icon"></i>
                </div>
                </div>
                <div
                className="ui bottom attached olive basic button"
                onClick={() => addToWishlist(product)}
                ><i className="add icon"></i>
                Add To Wishlist</div> 
            </div>
        </div>
        
    )
}

export default ProductCard
