import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, addToWishlist }) {
  const mappedProducts = products.map (product => (
    <ProductCard
      key={product.name}
      product={product}
      onProductClick={addToWishlist}
      />
  ))

  return (
    <div className="ui six cards">{mappedProducts}</div>
  )
}

export default ProductList