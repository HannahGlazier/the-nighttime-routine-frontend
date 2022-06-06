import React from 'react'

function ProductDetailCard({ ingredients }) {

    return (
        <div>
            <br></br>
            <h3 className="ui header"> <i className="flask icon"></i>Ingredients</h3>
            <h4>{ingredients.brand} - {ingredients.name}</h4>
            <div className="ingredients">
                {ingredients.ingredients}
            </div>
        </div>
    )
}

export default ProductDetailCard