import React from 'react'

function ProductDetailCard({ product }) {
    // const mappedProducts = product.map(p => p.name)

    return (
        <div className="ui sub header">
            {product.ingredients}
        </div>
    )
}

export default ProductDetailCard