import React from 'react'

function ProductDetailCard({ ingredients }) {

    return (
        <div>
            <header className="ui header"> <i class="flask icon"></i>Ingredients</header>
            <h3>{ingredients.name}</h3>
            <div className="ingredients">
                {ingredients.ingredients}
            </div>
        </div>
    )
}

export default ProductDetailCard