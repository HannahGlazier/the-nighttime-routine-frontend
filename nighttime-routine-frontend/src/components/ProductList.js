import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, addToWishlist, routeChange, sortBy, setSortBy }) {
  const mappedProducts = products.map (product => (
    <ProductCard
      key={product.id}
      product={product}
      onProductClick={addToWishlist}
      routeChange={routeChange}
      />
  ))

  return (
    <div>
      <div className="sort">Order By:
        <div className="ui item">
            <select 
              className="ui selection dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="name">Name</option>
            </select>
          </div>
          <br></br>
        <div className="ui five cards">{mappedProducts}</div>
      </div>
    </div>
  )
}

export default ProductList