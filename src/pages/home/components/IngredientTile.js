import React from 'react'

function IngredientTile(props) {
    return (
        <div>
            <input type="checkbox"></input>
            <label>{props.data.item}</label>
        </div>
    )
}

export default IngredientTile
