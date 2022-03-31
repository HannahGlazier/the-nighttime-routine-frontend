import React, {useState} from 'react'
import ProductDetailCard from './ProductDetailCard'
import { Link, NavLink, Route, Switch, BrowserRouter } from "react-router-dom";

function ProductCard({ product, onProductClick }) {

    const [showIngredients, setShowIngredients] = useState(false)

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


    function handleShowIngredients() {
        setShowIngredients(!showIngredients)
    }

    // function handleRoute(product) {
    //     showIngredients && <ProductDetailCard product={product}/>
    // }

    return (
        
        <div className="ui link card">
            <div className="card">
                <div className="ui horizontal divider">
                    <h4>{product.brand}</h4>
                </div>
                <div className="ui inverted divider">
                </div>
                <div className="content">
                    <h5> {product.name}</h5>
                    <h6>{product.price}</h6>
                    <h5>Good for: {product.concerns}</h5>
                    {/* <button onClick={showIngredients}>Show Ingreds</button> */}
                {/* <Link to="/ProductDetailCard" product={product}>View ingredients</Link>  */}
                <BrowserRouter>
                {/* <Switch>
                <Route exact path="/product" component={ProductDetailCard}>
                <ProductDetailCard product={product}/>
                    Ingredients</Route>
                    <NavLink to='/product' exact className="item">Ingredients</NavLink>
                    </Switch> */}
                    </BrowserRouter>
                </div>
                {showIngredients && <ProductDetailCard product={product}/>} 
                <div
                onClick={handleShowIngredients}
                className="ui bottom attached basic button"
                ><i className='caret down icon'></i></div>
                <div
                className="ui bottom attached olive basic button"
                onClick={() => addToWishlist(product)}
                ><i className="add icon"></i>
                Add To Wishlist</div> 
            </div>
            <Route exact path="/ProductDetailCard" component={ProductDetailCard}>
            <ProductDetailCard product={product}/>
            Ingredients</Route>
        </div>
        
    )
}

export default ProductCard

        // {/* <ProductDetailCard product={product} /> */}
        // {/* <Route exact path="/ProductDetailCard"><ProductDetailCard product={product}/>Ingredients</Route>*}