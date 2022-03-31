import React, {useState} from 'react'
import ProductDetailCard from './ProductDetailCard'
import { Link, NavLink, Route, Switch, BrowserRouter } from "react-router-dom";

function ProductCard({ product, onProductClick, routeChange }) {

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
                    <h5> {product.name} (${product.price})</h5>
                    <h5>Treat: {product.concerns}</h5>
                {/* <NavLink to="/ProductDetailCard">See Ingredients</NavLink> */}
                <div onClick={() => routeChange(product)}>Ingredients</div>
                </div>
                {/* {showIngredients && <ProductDetailCard product={product}/>} 
                <div
                onClick={handleShowIngredients}
                className="ui bottom attached basic button"
                ><i className='caret down icon'></i></div> */}
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

        // {/* <ProductDetailCard product={product} /> */}
        // {/* <Route exact path="/ProductDetailCard"><ProductDetailCard product={product}/>Ingredients</Route>*}




// working drop down ingredients
            //  {/* {showIngredients && <ProductDetailCard product={product}/>} 
            //     <div
            //     onClick={handleShowIngredients}
            //     className="ui bottom attached basic button"
            //     ><i className='caret down icon'></i></div> */}