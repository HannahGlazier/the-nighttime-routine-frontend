import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products }) {
  const mappedProducts = products.map (product => (
    <ProductCard
      key={product.name}
      product={product}
      />
  ))

  return (
    <div className="ui six cards">{mappedProducts}</div>
  )
}

export default ProductList