import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, addToWishlist, routeChange }) {
  const mappedProducts = products.map (product => (
    <ProductCard
      key={product.id}
      product={product}
      onProductClick={addToWishlist}
      routeChange={routeChange}
      />
  ))

  return (
    <div className="ui five cards">{mappedProducts}</div>
  )
}

export default ProductList