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
      <div>
      <div className="sort ui horizontal divider">Order By:</div>
        </div>
        <div className="ui item">
            <select 
              className="ui selection dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="name">Product Name</option>
              <option value="brand">Brand</option>
              <option value="low price">Price (Low - High)</option>
              <option value="high price">Price (High - Low)</option>
            </select>
          </div>
          <br></br>
        <div className="ui five cards">{mappedProducts}</div>
      </div>
  )
}

export default ProductList






// {/* <div className="ui item">
// <label>Order By:</label>
// </div>
// <div className="ui item">
// <input 
// checked={"default"}
// onChange={(e) => setSortBy(e.target.checked)}
// className="ui radio checkbox"
// type="checkbox" 
// name="default"/>
// <input 
// checked={"name"}
// onChange={(e) => setSortBy(e.target.checked)}
// className="ui ra checkbox"
// type="checkbox" 
// /> */}