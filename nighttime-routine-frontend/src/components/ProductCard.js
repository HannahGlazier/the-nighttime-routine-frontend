import React from 'react'

function ProductCard({ product }) {
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
            </div>
        </div>
    )
}

export default ProductCard